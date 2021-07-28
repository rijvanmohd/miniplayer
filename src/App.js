import {useRef,useEffect} from "react";
import './App.css';

function App() {
  let videoRef = useRef(null)

  useEffect(()=>{
    console.log(videoRef.current)
  },[])

  const onDragStart = (ev,id) => {
      console.log('dragstart:',id);
      videoRef.current.pause()
      ev.dataTransfer.effectAllowed = "move";
  }

  const onDrop = (ev) => {
    console.log('ondrop')
    ev.stopPropagation();
    ev.preventDefault();
    ev.target.appendChild(videoRef.current);
    ev.dataTransfer.dropEffect = "move"
    videoRef.current.play()
  }

  const onDragOver = (e) => {
    e.preventDefault()
  }

  const onTouchStart = (e) =>{
    console.log("touch")
    videoRef.current.pause()
  }

  return (
    <div className="container">
      <div className="top-left" onDrop={onDrop} onDragOver = {onDragOver}>
      
      </div>
      <div className="top-right" onDrop={onDrop} onDragOver = {onDragOver}></div>
      <div className="bottom-left" onDrop={onDrop} onDragOver = {onDragOver}>
        <video 
          id="video"
          className="video"
          width="200" 
          height="300" 
          key="dragable-video"
          ref={videoRef}
          onTouchStart={onTouchStart}
          onDragStart = {(e) => onDragStart(e,"video")}
          controls  
          draggable>
          <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="bottom-right" onDrop={onDrop} onDragOver = {onDragOver}></div>
    </div>
  );
}

export default App;
