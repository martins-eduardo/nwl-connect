'use client'

<<<<<<< HEAD
import { Copy, Link } from 'lucide-react'
import { IconButton } from '../../components/icon-button'
import { InputField, InputIcon, InputRoot } from '../../components/input'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

=======
import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

interface InviteLinkInputProps {
  InviteLink: string
}

export function InviteLinkInput({ InviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(InviteLink)
  }
>>>>>>> b7023c1 (Add Biome)
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
<<<<<<< HEAD

      <InputField readOnly defaultValue={inviteLink} />

=======
      <InputField readOnly defaultValue={InviteLink} />
>>>>>>> b7023c1 (Add Biome)
      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> b7023c1 (Add Biome)
