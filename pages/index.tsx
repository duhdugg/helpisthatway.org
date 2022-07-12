import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import GitHubIcon from '@mui/icons-material/GitHub'
import Link from 'next/link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MUILink from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import { getLanguagePack } from '../lib/language.js'

const Category = ({ lang, category }) => (
  <ListItem key={category}>
    <Link href={`/categories/${category}`}>
      <ListItemButton>
        <ListItemText>{lang.categoryNames[category]}</ListItemText>
        <ListItemIcon>
          <ArrowRightIcon />
        </ListItemIcon>
      </ListItemButton>
    </Link>
  </ListItem>
)

const index = () => {
  const lang = getLanguagePack()
  return (
    <>
      <CssBaseline enableColorScheme />
      <Container>
        <header>
          <h1>helpisthatway.org</h1>
        </header>
        <main>
          <section>
            <h2>{lang.sectionNames.immediateHelp}</h2>
            <Paper>
              <List>
                {['selfHarm'].map((category) => (
                  <Category key={category} category={category} lang={lang} />
                ))}
              </List>
            </Paper>
          </section>
          <section>
            <h2>Important Help</h2>
            <Paper>
              <List>
                {['lgbtqiaPlus', 'mentalHealth'].map((category) => (
                  <Category key={category} category={category} lang={lang} />
                ))}
              </List>
            </Paper>
          </section>
        </main>
        <footer>
          <h2>{lang.contribute.header}</h2>
          <p>{lang.contribute.body}</p>
          <div>
            <MUILink
              href='https://github.com/duhdugg/helpisthatway.org'
              target='_blank'
              rel='noreferrer noopener'
            >
              <GitHubIcon /> GitHub
            </MUILink>
          </div>
        </footer>
      </Container>
    </>
  )
}

export default index
