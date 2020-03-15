import React from "react"

const HomeSection = props => (
  <div className="md:flex items-center justify-between -m-4 md:-m-8">
    <div
      className={
        "w-full md:w-1/2 p-4 lg:p-8" +
        (props.imgLast === true ? " order-last" : "")
      }
    >
      <img
        className="w-full h-auto border border-gray-100"
        src={props.img}
        alt={props.title}
      />
    </div>
    <div className={"p-4 lg:p-8 md:w-1/2"}>
      <h2 className="text-purple font-thin uppercase text-2xl">
        {props.title}
      </h2>
      <p>{props.description}</p>
    </div>
  </div>
)

HomeSection.defaultProps = {
  img: "http://placekitten.com/640/480",
  title: "Lorem Ipsum Dolor Sit",
  imgLast: false,
  description:
    "Nam laoreet neque nec quam pulvinar, non dictum augue gravida. Maecenas felis sapien, auctor ut fermentum sed, pellentesque vitae nisl. Aenean scelerisque, felis eget auctor volutpat, risus ligula aliquam ipsum, sed tempor nibh nulla non enim. Integer gravida massa ac dolor aliquet iaculis. Nam pellentesque tempor neque, pulvinar pharetra mi faucibus ornare. Ut non urna elementum, aliquam tortor sit amet, vestibulum enim. Ut cursus at dui ac auctor. Pellentesque consequat tortor arcu, et viverra ex egestas ac. Maecenas id laoreet purus, a tempor elit. Nunc dolor lectus, gravida eu finibus blandit, tincidunt at elit. Nullam egestas porta mauris, eget aliquam elit gravida eu. Quisque condimentum nibh non rhoncus auctor.",
}

export default HomeSection
