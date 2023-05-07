import React from 'react'
import "./TodosLoading.css"

export const TodosLoading = () => {
  return (
    <div>
      <p>Cargando lista de TODOs ⌛</p>
      <div className="loadingContainer">
        <div className="loadingContainer1"></div>
        <div className="loadingContainer2"></div>
        <div className="loadingContainer3"></div>
      </div>
    </div>
  )
}
