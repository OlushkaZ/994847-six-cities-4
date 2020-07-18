import * as React from 'react';

import {Offer} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

interface Props {
    offers: Offer[];
}

const OffersList: React.FC<Props> = (props) => {
  const {offers = []} = props;
  return (
    <div className="cities__places-list places__list tabs__content">      {offers.map(
        (offer) => (
          <OfferCard
            key={offer.id}
            {...offer}
          />
        )
    )}
    </div>
  );
};

// class OffersList extends React.PureComponent<Props> {
//   render() {
//     const {
//       offers = []
//     } = this.props;

//     return (
//       <div className="cities__places-list places__list tabs__content">
//         {offers.map(
//             (offer) => (
//               <OfferCard
//                 key={offer.id}
//                 {...offer}
//               />
//             )
//         )}
//       </div>
//     );
//   }
// }

export default OffersList;
