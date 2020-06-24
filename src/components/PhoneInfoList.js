import React ,{Component} from 'react';
import PhoneInfo from './PhoneInfo';


class PhoneInfoList extends Component {
    static defaultProps = {
      list: [],
      onRemove: () => console.warn('onRemove not defined'),
      onUpdate: () =>console.warn('onRemove not defined')
    }

    //렌더 최적화
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
      }
  
    render() {
        console.log('render PhoneInfoList');
      const { data, onRemove,onUpdate } = this.props;
      console.log(data);
      const list = data.map(
        info => (
          <PhoneInfo
            key={info.id}
            info={info}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />)
      );
  
      return (
        <div>
          {list}    
        </div>
      );
    }
  }
  
export default PhoneInfoList;