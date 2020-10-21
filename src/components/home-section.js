import React from "react";
import PropTypes from 'prop-types';

const HomeSection = ( { img, imgLast, title, description } ) => (
  <div className="items-center justify-between -mx-4 md:flex md:-mx-8">
    <div
      className={
        `w-full md:w-1/2 p-4 lg:p-8${ 
        imgLast === true ? " order-last" : ""}`
      }
    >
      <img className="w-full h-auto" src={img} alt={title} />
    </div>
    <div className="p-4 lg:p-8 md:w-1/2">
      <h2 className="text-2xl font-thin uppercase text-purple">
        {title}
      </h2>
      <p>{description}</p>
    </div>
  </div>
);

HomeSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  imgLast: PropTypes.bool,
}

HomeSection.defaultProps = {
  img: "http://placekitten.com/640/480",
  title: "Lorem Ipsum Dolor Sit",
  imgLast: false,
  description:
    "Nam laoreet neque nec quam pulvinar, non dictum augue gravida. Maecenas felis sapien, auctor ut fermentum sed, pellentesque vitae nisl. Aenean scelerisque, felis eget auctor volutpat, risus ligula aliquam ipsum, sed tempor nibh nulla non enim. Integer gravida massa ac dolor aliquet iaculis. Nam pellentesque tempor neque, pulvinar pharetra mi faucibus ornare. Ut non urna elementum, aliquam tortor sit amet, vestibulum enim. Ut cursus at dui ac auctor. Pellentesque consequat tortor arcu, et viverra ex egestas ac. Maecenas id laoreet purus, a tempor elit. Nunc dolor lectus, gravida eu finibus blandit, tincidunt at elit. Nullam egestas porta mauris, eget aliquam elit gravida eu. Quisque condimentum nibh non rhoncus auctor.",
};

export default HomeSection;
