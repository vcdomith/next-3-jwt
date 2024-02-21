import React from 'react'


const authPageStatic = (props) => {
  return (
    <div>
        <h1>
            Auth Page Static
        </h1>
        <pre>
          {JSON.stringify(props, null, 2)}
        </pre>
    </div>
  )
}

export default authPageStatic