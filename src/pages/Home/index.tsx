import { Calendar, Card } from 'antd'

interface Item {
  hitokoto?: string
  fromWho?: string
  from: string
}
const Home = () => {
  const dailySentence: Item = {
    hitokoto: '生活就像一盒巧克力，你永远不知道下一颗是什么味道。',
    fromWho: 'wsk',
    from: '阿甘正传'
  }

  return (
    <>
      <Card
        style={{
          background: 'linear-gradient(135deg,#005aa7,#fffde4)',
          height: '160px'
        }}
      >
        <h2>每日一句</h2>
        <p>{dailySentence.hitokoto}</p>
        <p style={{ textAlign: 'right' }}>
          {dailySentence.fromWho || ''} 【{dailySentence.from}】
        </p>
      </Card>
      <Calendar fullscreen={false} />
    </>
  )
}
export default Home
