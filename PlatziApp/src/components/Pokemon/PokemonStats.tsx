import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Stat} from '../../api/pokemonInterfaces';
import {capitalize} from 'lodash';

interface Props {
  stats: Stat[];
  colors: string[];
}
export default function PokemonStats({stats, colors}: Props) {
  function fillBackgroundBar(percent: number) {
    if (percent > 100) {
      return {width: '100%', backgroundColor: colors[0]};
    }
    if (percent > 50) {
      return {width: `${percent}%`, backgroundColor: '#00ac17'};
    }
    return {width: `${percent}%`, backgroundColor: '#ff3e3e'};
  }

  return (
    <>
      {stats.map((stat, i) => (
        <View style={styles.stat} key={i}>
          <Text style={styles.statTitle}>{capitalize(stat.stat.name)}</Text>
          <View style={styles.statInfo}>
            <Text style={styles.statInfoNumber}>{stat.base_stat}</Text>
            <View style={styles.statInfoBar}>
              <View
                style={[
                  styles.statInfoBarFill,
                  fillBackgroundBar(stat.base_stat),
                ]}
              />
            </View>
          </View>
        </View>
      ))}
    </>
  );
}
const styles = StyleSheet.create({
  stat: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  statTitle: {
    flex: 3,
    fontSize: 12,
    color: '#6b6b6b',
  },
  statInfo: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statInfoNumber: {
    fontSize: 12,
    flex: 1,
  },
  statInfoBar: {
    backgroundColor: '#ccc',
    flex: 9,
    height: 5,
    borderRadius: 20,
  },
  statInfoBarFill: {
    backgroundColor: 'teal',
    height: '100%',
    width: '50%',
    borderRadius: 20,
  },
});
