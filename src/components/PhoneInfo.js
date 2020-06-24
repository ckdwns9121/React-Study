import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      number: '010-0000-0000',
      id: 0
    },
  }
  state = {
    editing: false,
    name: '',
    number: '1234'
  }

  handleRemove = () => {
    // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
    this.props.onRemove(this.props.info.id);
  }
  handleToggleEdit = () => {
    console.log("클릭");
    const { editing } = this.state;
    this.setState({ editing: !editing });
  }
  handleChange = (e) => {
    console.log("번호"+this.state.number);
    this.setState({
      [e.target.name] :e.target.value
    })
  }
  componentDidUpdate(prevProps, prevState) {

    const { info, onUpdate } = this.props;
    if (!prevState.editing && this.state.editing) {
      this.setState({
        name: info.name,
        number: info.number
      })
    }
    if (prevState.editing && !this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        number: this.state.number
      });
    }
  }

  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };
    const { editing } = this.state;
    if (editing) {
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="이름"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.number}
              name="number"
              placeholder="전화번호"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>적용</button>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      );
    }
    const {
      name, number
    } = this.props.info;

    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{number}</div>
        <button onClick={this.handleToggleEdit}>수정</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    )
  }
}

export default PhoneInfo;