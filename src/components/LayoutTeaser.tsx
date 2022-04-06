import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { State } from '../store'

const LayoutDiv = styled.div`
  /* box-sizing: border-box; */
`
const Header = styled.div`
  /* box-sizing: border-box; */
`
const Cleff = styled.div``
const Visualizer = styled.div``
const Footer = styled.div``

export const LayoutTeaser = (props: any) => {
  const theme = useSelector((state: State) => state.root.theme)

  let header = 8,
    staff = 'h-12',
    visualizer = 'h-10',
    footer = 8

  // determing sizing for teaser layout based on hidden properties
  if (props.hideStaff) {
    staff = 'hidden'
    visualizer = 'h-24'
  } else if (props.hideVisualizer) {
    visualizer = 'hidden'
    staff = 'h-24'
  } else if (props.hideFooter) footer = 0
  else if (props.hideHeader) header = 0

  return (
    <div>
      <p className="text-center mb-2" style={{ color: theme.secondaryText }}>
        {props.title}
      </p>
      <LayoutDiv className="w-48">
        <Header
          className="w-full h-8 border-2 border-slate-500 mb-2 pl-1"
          style={{ color: theme.secondaryText }}>
          Header
        </Header>
        <Cleff
          className={`w-full ${staff} border-2 border-pink-500 mb-2 pl-1`}
          style={{ color: theme.secondaryText }}>
          Staff
        </Cleff>
        <Visualizer
          className={`w-full ${visualizer} border-2 border-orange-400 mb-2 pl-1`}
          style={{ color: theme.secondaryText }}>
          Visualizer
        </Visualizer>
        <Footer
          className="w-full h-8 border-2 border-blue-300 mb-2 pl-1"
          style={{ color: theme.secondaryText }}>
          Footer
        </Footer>
      </LayoutDiv>
    </div>
  )
}
