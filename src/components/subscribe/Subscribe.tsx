'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import { SubscribeModal } from '@/components/subscribe/SubscribeModal'



export function Subscribe() {

	const [openModal, setOpenModal] = useState<boolean>(false)

	const onCloseModal = () => {
		setOpenModal(false)
	}

  return (
    <div>
			<Button onClick={() => setOpenModal(!openModal)} variant='solid' color="green">Subscribe</Button>

			<SubscribeModal openModal={openModal} onCloseModal={() => {onCloseModal()}} />

		</div>
  )
}
