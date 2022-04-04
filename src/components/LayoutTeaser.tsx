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
          className={`w-full ${
            props.isVisualizer ? ' h-12 ' : ' h-24 '
          } border-2 border-pink-500 mb-2 pl-1`}
          style={{ color: theme.secondaryText }}>
          Cleff
        </Cleff>
        {props.isVisualizer ? (
          <Visualizer
            className="w-full h-10 border-2 border-orange-400 mb-2 pl-1"
            style={{ color: theme.secondaryText }}>
            Visualizer
          </Visualizer>
        ) : (
          ''
        )}
        <Footer
          className="w-full h-8 border-2 border-blue-300 mb-2 pl-1"
          style={{ color: theme.secondaryText }}>
          Footer
        </Footer>
      </LayoutDiv>
    </div>
  )
}
