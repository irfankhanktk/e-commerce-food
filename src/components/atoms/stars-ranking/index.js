import React, {useState} from 'react';
import {View, Text} from 'react-native';
import StarRating from 'react-native-star-rating';
const MyRanking = props => {
  const [rating, setRating] = useState(0);
  const {disabled = false, starSize = 25, starStyle} = props;
  return (
    <View>
      <StarRating
        disabled={disabled} // false
        maxStars={5}
        starSize={starSize}
        rating={rating}
        starStyle={[{marginRight: 5}, starStyle]}
        emptyStarColor="green"
        fullStarColor="green"
        selectedStar={rating => setRating(rating)}
      />
    </View>
  );
};
export default MyRanking;
