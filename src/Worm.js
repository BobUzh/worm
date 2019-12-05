import React, {Component} from 'react';
import Frame from './Frame';
import png from './1.png';


function createArr(){
    const arr = []
    for (let i=1;i<=100; i++){
        const item = {id:i,show:false}
        arr.push(item)
      }
    arr[64].show=true;
    arr[74].show=true;
    arr[84].show=true;
    arr[94].show=true;
      return arr
}


export default class Worm extends Component {

arr1= createArr();

state= {
arr:[...this.arr1],
worm:[
    {id:65,show:true},
    {id:75,show:true},
    {id:85,show:true},
    {id:95,show:true}
    
],
vector:-10,
start:true
}

style = { zIndex: 1}

update = ()=> {

  if(([10,20,30,40,50,60,70,80,90,100].includes(this.state.worm[0].id)  && this.state.vector==1)||
    ([1,11,21,31,41,51,61,71,81,91].includes(this.state.worm[0].id)  && this.state.vector==-1)||
    ([1,2,3,4,5,6,7,8,9,10].includes(this.state.worm[0].id)  && this.state.vector==-10)||
    ([91,92,93,94,95,96,97,98,99,100].includes(this.state.worm[0].id)  && this.state.vector==10)){
    this.props.start()
    return
  }

  const route = this.state.vector;
                                                    console.log(this.state.worm)
  let idNewtHead = this.state.worm[0].id+route;
    // if (idNewtHead==101){ idNewtHead=1}
  const  newHead = this.state.arr.find((e)=>e.id===idNewtHead);
    // if(newHead===undefined || newHead.show){return}
  const idTail = this.state.worm[this.state.worm.length-1].id;
  const  tail = this.state.arr.find((e)=>e.id===idTail);

  newHead.show = true;
  tail.show = false;
  
  const newWorm = [newHead, ...this.state.worm.slice(0,this.state.worm.length-1)]
  console.log(newHead)
  this.setState({
    worm: [...newWorm]
  })
}

componentWillUnmount(){

clearInterval(this.interval)
}
gogo = () => {
    this.style = { zIndex: -1}
    this.interval = setInterval(this.update,500)
}

handleKey(event) {
  switch(event.key){
    case 'ArrowUp':
      return this.setState({vector:-10});
    case 'ArrowLeft':
      return this.setState({vector:-1});
    case 'ArrowDown':
      return this.setState({vector:10});
    case 'ArrowRight':
      return this.setState({vector:1});
    default:
        break;
    
  }
}

  render(){
      
    const full = this.state.arr.map((e)=>{
      return  <Frame key={e.id} show={e.show}/>
    })
  return (
      <div style={{ position: 'relative' }} onKeyDown={(e) => this.handleKey(e)}>
          <div className="App vh-100 d-flex justify-content-center align-items-center"
              tabIndex="0">
              <div className="place d-flex">
                  {full}
              </div>
          </div>
          <div className="ready-go d-flex flex-column justify-content-center align-items-center"
              style={this.style}>
              <button type="button"
                  className="btn btn-outline-dark font-size"
                  onClick={this.gogo}>ready GO
              </button>
              <div className="text-center">
                  <img src={png} alt=""/>
              </div>
          </div>
      </div>
  )};
}

