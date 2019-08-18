import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image,Button} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
@inject('Store')
@observer
class UserPage extends Component {
  constructor(props) {
    super(props)

  }
  componentWillMount() {}
  componentDidMount() {

  }
  render() {
    let show=this.props.Store.show;                     //先取值，不然render函数虽然触发但是不会更新ui
    let userAvatar=this.props.Store.userAvatar;
    return (
      <View style={`display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column`}>
        <Image
          style='width: 300px;height: 100px;background: #fff;'
          src={userAvatar}
        />
        {show? <Button open-type="getUserInfo"
                                        onGetUserInfo={(e)=>{
                                          let self=this
                                          if(e.detail.userInfo){
                                            console.log('successful')//授权成功点击了确认按钮，小程序原版为bindgetuserinfo="bindGetUserInfo"
                                            self.props.Store.hiddenButton()
                                            self.props.Store.changeAvatar(e.detail.userInfo.avatarUrl)
                                          }else{
                                            console.log('fail');//授权失败
                                          }
                                        }}
          >授权登录</Button>
          :''}
      </View>
    )
  }
}

export default UserPage
