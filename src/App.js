import React from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfo from './components/PhoneInfo'
import PhoneInfoList from './components/PhoneInfoList'
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  id =2;
  state = {
    information: [],
    keyword : ''
  }
  handleChange =(e) =>{
    this.setState({
      keyword :e.target.value
    })
  }
  handleCreate =(data) =>{
    const { information } = this.state;
    this.setState({
      information : information.concat({id : this.id++ ,...data}),
      keyword :''
    })
    console.log(data);
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
    console.log(`delete${id}`);
  }

  handleUpdate = (id, data) => {
    console.log("업데이트");
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id ? { ...info, ...data }  : info// 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀  // 기존의 값을 그대로 렌더링
      )
    })
  }
  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <p>
          <input 
            placeholder="검색 할 이름을 입력하세요.." 
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr />
        <PhoneInfoList 
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default App;
