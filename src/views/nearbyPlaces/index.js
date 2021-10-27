import React from "react";
import styles from "./styles.module.css";
import Hotel01 from "./assets/hotel_serra_da_moeda.png";
import Hotel02 from "./assets/hotel_moedense.png";

export default function NearbyPlacesView(): React$Element<*> {
  return (
    <div className={styles.nearbyPlacesView}>
      <p className={styles.title}>Onde Ficar</p>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit
        amet fringilla augue. Aliquam erat volutpat. Duis feugiat porta urna ut
        condimentum. Curabitur justo purus, tempus non eleifend in, ornare ut
        massa. Vivamus dapibus in odio ut pharetra. Fusce eget egestas ex, ac
        blandit magna. Mauris viverra lectus sed enim eleifend maximus. Sed nibh
        ex, aliquet eget vehicula vel, pulvinar.
      </p>
      <div className={styles.row}>
        <img
          src={Hotel01}
          alt=" Hotel Serra da Moeda"
          className={styles.leftImage}
        />
        <p className={styles.cardText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tellus diam, volutpat lacinia tincidunt eu, viverra ut ex. In finibus
          vulputate odio. Nullam non nunc nisl. Maecenas eget rutrum arcu.
          Phasellus nec vehicula est. In sed tellus maximus, semper lorem ac,
          tempus nunc. Mauris non volutpat elit. Maecenas fermentum dignissim
          tellus, sit amet volutpat felis dictum in. Fusce ornare massa non
          posuere porttitor. Sed ac vestibulum libero. Phasellus libero quam.
        </p>
      </div>
      <div className={styles.row}>
        <img
          src={Hotel02}
          alt=" Hotel Moedense"
          className={styles.rightImage}
        />
        <p className={styles.cardText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tempus facilisis magna sit amet iaculis. Ut vel mollis diam, in
          lacinia nulla. Nulla sed luctus nibh, sit amet gravida arcu. Morbi
          tincidunt quis purus in interdum. Etiam varius ex ut odio aliquam
          viverra. Nam feugiat scelerisque sollicitudin. Pellentesque bibendum
          nisl non aliquet dictum. Etiam at leo nec arcu rhoncus tempor.
          Vestibulum a sagittis purus. Sed dignissim felis quis viverra
          ultrices.
        </p>
      </div>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit
        amet fringilla augue. Aliquam erat volutpat. Duis feugiat porta urna ut
        condimentum. Curabitur justo purus, tempus non eleifend in, ornare ut
        massa. Vivamus dapibus in odio ut pharetra. Fusce eget egestas ex, ac
        blandit magna. Mauris viverra lectus sed enim eleifend maximus. Sed nibh
        ex, aliquet eget vehicula vel, pulvinar.
      </p>
    </div>
  );
}
