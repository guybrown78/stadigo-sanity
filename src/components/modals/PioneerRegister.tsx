'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import { PioneerModal } from '@/components/modals/PioneerModal'

export function PioneerRegister() {

	const [openModal, setOpenModal] = useState<boolean>(false)

	const onCloseModal = () => {
		setOpenModal(false)
	}

  return (
    <div>
			<Button onClick={() => setOpenModal(!openModal)} variant='solid' color="green" width="full">Pioneer Program: Registration Now</Button>

			<PioneerModal openModal={openModal} onCloseModal={() => {onCloseModal()}} />

		</div>
  )
}
