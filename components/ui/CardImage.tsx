import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DeleteButton } from "@/components/ui/delete-button"
import Link from "next/link"
import Image from "next/image"

interface CardServiceProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
  badgeText?: string;
}
export function CardImage({ id, title, description, imageUrl, linkTo, badgeText }: CardServiceProps) {
  const href = linkTo || `/services/${id}`;
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-col">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <div className="relative z-20 aspect-video w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover brightness-60 grayscale dark:brightness-40"
          unoptimized
        />
      </div>
      <CardHeader>
        <CardAction>
          {badgeText && <Badge variant="secondary">{badgeText}</Badge>}
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <div className="flex-1" />
      <CardFooter className="flex flex-col gap-2 mt-auto">
        <Link
          href={href}
          className="inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground transition-all h-8 gap-1.5 hover:bg-primary/80"
        >
          Modify
        </Link>
        <DeleteButton id={id} endpoint="/api/services" itemName="service" />
      </CardFooter>
    </Card>
  )
}
