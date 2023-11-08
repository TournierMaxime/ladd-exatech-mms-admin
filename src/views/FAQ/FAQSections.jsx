import React from "react"
import YouTube from "react-youtube"
import { Card, SpeedDial } from "primereact"

const FAQSections = ({ oneFaq }) => {
  const faqSections = oneFaq?.FAQSections?.map((item, index) => {
    const images = (content) => {
      if (item?.Images) {
        return item?.Images.map((item, index) => (
          <img
            style={{ width: "20em" }}
            key={index}
            src={item.imagePath}
            alt={content}
          />
        ))
      }
    }

    const speedDialItems = [
      {
        label: "Update",
        icon: "pi pi-refresh",
        command: () => {},
      },
      {
        label: "Delete",
        icon: "pi pi-trash",
        command: () => {},
      },
    ]

    switch (item.type) {
      case "image":
        return (
          <Card key={index}>
            <div className="flex flex-column justify-content-between align-items-center w-12 my-4">
              {images(item.content)}
            </div>
          </Card>
        )
      case "video":
        return (
          <Card key={index}>
            <div className="flex justify-content-center w-12">
              <YouTube videoId={item.content} />
            </div>
          </Card>
        )
      default:
        const htmlContent = { __html: item.content }
        return (
          <Card key={index}>
            <div className="flex justify-content-center w-12 text-justify line-height-4 relative">
              <SpeedDial
                model={speedDialItems}
                radius={120}
                type="quarter-circle"
                direction="up"
                style={{ right: 60, top: 60 }}
                buttonClassName="p-button-help absolute"
              />
              <div dangerouslySetInnerHTML={htmlContent} />
            </div>
          </Card>
        )
    }
  })

  return <div className="my-4">{faqSections}</div>
}

export { FAQSections }
