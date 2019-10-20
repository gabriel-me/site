import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

export default function (props) {

  const history = useHistory();

  function handleClick(itemId, link) {
    history.push(link)
  }

  function renderList(itens) {
    const list = itens.map(function (item, i) {
      const itemId = `item-${i}`
      return (
        <li id={itemId} key={itemId} onClick={() => handleClick(itemId, item.link)}>
          {item.name}
        </li>
      )
    })

    return list
  }

  return ( 
    <ul className="list">
      {renderList(props.itens)}
    </ul>
  )
}  