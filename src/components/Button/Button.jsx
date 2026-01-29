import React from 'react'

const Button = (props) => {
  return (
    <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300">
        {props.content}
    </button>

  )
}

export default Button
