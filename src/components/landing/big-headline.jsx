import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const BigHeadline = () => {
  return (
    <section aria-label="Headline" className="text-center max-w-5xl mx-auto">
      <h3 className="text-2xl md:text-6xl font-bold text-gray-600 line-clamp-6">
        <span className="text-[#111]">We engineer high-quality,</span> durable components that meet the exacting demands of{" "}
        <span className="text-[#0057ff]">modern industries.</span>
      </h3>
      <div className="m-auto flex items-center justify-center space-x-3 mt-6">
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 ">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
           
        </div>
      </div>
      <p className="mt-4 text-base text-muted-foreground">
        Our teams combine advanced materials, expert talent, and lean workflows to deliver at scale.
      </p>
    </section>
  )
}

export default BigHeadline