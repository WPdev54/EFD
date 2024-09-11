import Link from 'next/link'
import React from 'react'

const Links = ({ name, link }: { name: string, link: string }) => {
    return (
        <Link href={link}>
            {name}
        </Link>
    )
}

export default Links
