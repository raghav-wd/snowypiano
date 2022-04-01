import styled from 'styled-components'

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
  return (
    <div>
      <p className="text-center" style={{ color: 'white' }}>
        {props.title}
      </p>
      <LayoutDiv className="w-44">
        <Header className="w-full h-6 bg-slate-500 m-1">Header</Header>
        <Cleff className={`w-full ${props.isVisualizer ? ' h-12 ' : ' h-20 '} bg-pink-500 m-1`}>
          Cleff
        </Cleff>
        {props.isVisualizer ? (
          <Visualizer className="w-full h-8 bg-orange-400 m-1">Visualizer</Visualizer>
        ) : (
          ''
        )}
        <Footer className="w-full h-6 bg-blue-300 m-1">Footer</Footer>
      </LayoutDiv>
    </div>
  )
}
