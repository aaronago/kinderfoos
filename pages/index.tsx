import { useRouter } from 'next/router'
import { SkipNavContent } from '@reach/skip-nav'

import Page from '@components/page'
import ConfContent from '@components/index'

export default function Conf() {
  const { query } = useRouter()
  const meta = {
    title: 'Kinder Foos',
    description: 'Kinder feet kinder world',
  }
  const ticketNumber = query.ticketNumber?.toString()
  const defaultUserData = {
    id: query.id?.toString(),
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : undefined,
    name: query.name?.toString(),
    username: query.username?.toString(),
  }

  return (
    <Page meta={meta} fullViewport>
      <SkipNavContent />
      <ConfContent
        defaultUserData={defaultUserData}
        defaultPageState={query.ticketNumber ? 'ticket' : 'registration'}
      />
      <script
        type="text/javascript"
        src="http://classic.avantlink.com/affiliate_app_confirm.php?mode=js&authResponse=692f90f8092a864512f4842cbdbe9b8316f0131f"
      ></script>
    </Page>
  )
}
