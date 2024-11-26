import React from 'react'
import Class_props from './Class-props'
import Fun_props from './Fun-props'

function Main_card() {
  return (
    <div>
      <div className="container">
        <h1>hello this class</h1>
        <div className="row">
            <Class_props title="Leh ladak" desc="asdf asdasd sad asd asd sadasdsadfasef" img="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Class_props title="Leh ladak 2" desc="asdf asdasd sad asd asd sadasdsadfasef" img="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Class_props title="Leh ladak 2" desc="asdf asdasd sad asd asd sadasdsadfasef" img="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Class_props title="Leh ladak 2" desc="asdf asdasd sad asd asd sadasdsadfasef" img="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Class_props title="Leh ladak 2" desc="asdf asdasd sad asd asd sadasdsadfasef" img="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
      </div>
      <div className="container">
        <h1>hello this Func props</h1>
        <div className="row">
            <Fun_props img="https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=600" title="nature 1" desc="asdh  asd asnbdjkh asdh asklhdi ls" />
            <Fun_props img="https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=600" title="nature 1" desc="asdh  asd asnbdjkh asdh asklhdi ls" />
            <Fun_props img="https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=600" title="nature 1" desc="asdh  asd asnbdjkh asdh asklhdi ls" />
            <Fun_props img="https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=600" title="nature 1" desc="asdh  asd asnbdjkh asdh asklhdi ls" />
            <Fun_props img="https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=600" title="nature 1" desc="asdh  asd asnbdjkh asdh asklhdi ls" />
            
        </div>

      </div>
    </div>
  )
}

export default Main_card
