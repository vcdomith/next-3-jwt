import React from 'react'
import { tokenService } from '../src/services/auth/tokenService'
import nookies from 'nookies'

export async function getServerSideProps(ctx) {

    const cookie = nookies.get()
    console.log(cookie);

    return {
        props: {
            token: tokenService.get(ctx)
        }
    }
}

const authPageSSR = (props) => {

    console.log(tokenService.get())

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

export default authPageSSR