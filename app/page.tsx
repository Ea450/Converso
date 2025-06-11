
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/Cta'
import { getAllCompanions, getRecentSession } from '@/lib/actions/companion.action'
import { getSubjectColor } from '@/lib/utils'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async () => {
  const user= await auth();
  if(!user) redirect('/sign-in')
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSession(10)
  return (
    <main>
      <h1>Dashboard</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      <section className='home-section'>
        <CompanionsList
          title='Recently completed sessions'
          companions={recentSessionsCompanions}
          classNames='w-2/3 max-lg:w-full '
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page