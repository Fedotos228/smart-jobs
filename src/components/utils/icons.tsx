import AirplaneTilt from '@/icons/AirplaneTilt.svg'
import ArrowElbowRightDown from '@/icons/ArrowElbowRightDown.svg'
import ArrowRight from '@/icons/ArrowRight.svg'
import CaretDown from '@/icons/CaretDown.svg'
import CaretRight from '@/icons/CaretRight.svg'
import CheckCircle from '@/icons/check-circle.svg'
import Exam from '@/icons/exam.svg'
import FuileDoc from '@/icons/fuile-doc.svg'
import Headset from '@/icons/Headset.svg'
import MapPin from '@/icons/MapPin.svg'
import MicrosoftOutlookLogo from '@/icons/MicrosoftOutlookLogo.svg'
import NotePencil from '@/icons/note-pencil.svg'
import Phone from '@/icons/Phone.svg'
import Scroll from '@/icons/scroll.svg'
import Users from '@/icons/users.svg'
import { ComponentType, SVGProps } from 'react'

const iconMap = {
  'airplane-tilt': AirplaneTilt,
  'arrow-elbow-right-down': ArrowElbowRightDown,
  'arrow-right': ArrowRight,
  'caret-down': CaretDown,
  'caret-right': CaretRight,
  'check-circle': CheckCircle,
  exam: Exam,
  'fuile-doc': FuileDoc,
  headset: Headset,
  'map-pit': MapPin,
  'outlook': MicrosoftOutlookLogo,
  'note-pencil': NotePencil,
  phone: Phone,
  scroll: Scroll,
  users: Users
} satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>

export type IconName = keyof typeof iconMap

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
  width?: number
  height?: number
}

export function Icon({ name, size = 24, width, height, ...props }: IconProps) {
  const Svg = iconMap[name]

  return <Svg width={width ?? size} height={height ?? size} {...props} />
}