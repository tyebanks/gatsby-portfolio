import React from 'react';

const Projects = (props) => {
    return (
        <div className="tile is-ancestor is-12">
            <div class="tile is-9 is-parent notification is-primary">
                <div class="tile is-vertical card-content">
                    <p class="is-size-4-desktop has-text-weight-bold">{props.title}</p>
                    <img  className="img-fluid"  src={props.src} alt={props.description}/>
                    <p class="is-size-5-desktop">{props.subtitle2}</p>
                    <p class="is-size-5-desktop">{props.subtitle1}</p>
                </div>
            </div>
         </div>        
    )
}
export default Projects;







// import PropTypes from 'prop-types';
// import React, { Component } from 'react';


// class Projects extends Component {
//   const gallery =  {
//     return (
//       <div key={obj.src} className="col-lg-4 col-sm-6">
//         <a
//           // onClick={e => this.openLightbox(i, e)}
//           className="project-box"
//           href={obj.src}
//         >
//           <img
//             className="img-fluid"
//             src={obj.thumbnail}
//             alt={obj.description}
//             title={obj.title}
//           />
          /* <div className="project-box-caption">
            <div className="project-category text-white-50">{obj.title}</div>
            <div className="project-name">{obj.desc}</div>
          </div> */
//         </a>
//       </div>
//     );
//   });

//   return (
//     <div className="container-fluid p-0">
//       <div className="row no-gutters"> {gallery} </div>
//     </div>
//   );
// }
// export default Projects;
  //   this.state = {
  //     lightboxIsOpen: false,
  //     currentImage: 0,
  //   };

  //   this.closeLightbox = this.closeLightbox.bind(this);
  //   this.gotoNext = this.gotoNext.bind(this);
  //   this.gotoPrevious = this.gotoPrevious.bind(this);
  //   this.gotoImage = this.gotoImage.bind(this);
  //   this.handleClickImage = this.handleClickImage.bind(this);
  //   this.openLightbox = this.openLightbox.bind(this);
  // }
  // openLightbox(index, event) {
  //   event.preventDefault();
  //   this.setState({
  //     currentImage: index,
  //     lightboxIsOpen: true,
  //   });
  // }
  // closeLightbox() {
  //   this.setState({
  //     currentImage: 0,
  //     lightboxIsOpen: false,
  //   });
  // }
  // gotoPrevious() {
  //   this.setState({
  //     currentImage: this.state.currentImage - 1,
  //   });
  // }
  // gotoNext() {
  //   this.setState({
  //     currentImage: this.state.currentImage + 1,
  //   });
  // }
  // gotoImage(index) {
  //   this.setState({
  //     currentImage: index,
  //   });
  // }
  // handleClickImage() {
  //   if (this.state.currentImage === this.props.images.length - 1) return;

  //   this.gotoNext();
  // }
  // renderGallery() {
  //   const { images } = this.props;

  //   if (!images) return;


  // render() {
  //   return (
  //     // <>
  //     //   {this.renderGallery()}
  //     //   <Lightbox
  //     //     currentImage={this.state.currentImage}
  //     //     images={this.props.images.map(img => {
  //     //       img.caption = `${img.title} - ${img.desc}`;
  //     //       return img;
  //     //     })}
  //     //     isOpen={this.state.lightboxIsOpen}
  //     //     onClickImage={this.handleClickImage}
  //     //     onClickNext={this.gotoNext}
  //     //     onClickPrev={this.gotoPrevious}
  //     //     onClickThumbnail={this.gotoImage}
  //     //     onClose={this.closeLightbox}
  //     //   />
  //     // </>
  //   );
  // }


// Gallery.displayName = 'Gallery';
// Gallery.propTypes = {
//   images: PropTypes.array,
// };


