import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Link from 'next/link'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MUILink from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import PublicIcon from '@mui/icons-material/Public'
import Typography from '@mui/material/Typography'
import { getLanguagePack } from '../../lib/language.js'
import { getSites } from '../../lib/categories.js'
import { useRouter } from 'next/router'

const Site = ({ lang, site }) => (
  <Card key={site.domain}>
    <CardHeader title={lang.domains[site.domain].name} />
    <CardContent>
      <Typography>{lang.domains[site.domain].description}</Typography>
    </CardContent>
    <CardActions>
      {site.phone ? (
        <Link href={`tel:+${site.phone}`} passHref>
          <Button target='_blank' rel='noreferrer noopener'>
            <LocalPhoneIcon /> {site.phone}
          </Button>
        </Link>
      ) : (
        ''
      )}
      <Link href={site.url} passHref>
        <Button target='_blank' rel='noreferrer noopener'>
          <PublicIcon /> Website
        </Button>
      </Link>
    </CardActions>
  </Card>
)

const category = () => {
  const router = useRouter()
  const { category } = router.query
  const lang = getLanguagePack()
  const sites = getSites(category)
  return (
    <>
      <CssBaseline enableColorScheme />
      <Container>
        <header>
          <h1>
            <Link href='/' passHref>
              <MUILink>helpisthatway.org</MUILink>
            </Link>{' '}
            <ChevronRightIcon />
            {lang.categoryNames[category]}
          </h1>
        </header>
        <main>
          <Paper>
            {sites.map((site) => (
              <Site key={site.domain} lang={lang} site={site} />
            ))}
          </Paper>
        </main>
        <footer></footer>
      </Container>
    </>
  )
}

export default category
