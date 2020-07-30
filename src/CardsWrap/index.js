import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';

import CradsContext from '../context/cards-context';

class CardsWrap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      planets: [
        {
          id: uuidv1(),
          title: 'Меркурий',
          context: `Меркурий - самая маленькая планета в нашей солнечной системе и ближайшая к Солнцу - лишь немного больше, чем Луна Земли. Меркурий - самая быстрая планета, которая движется вокруг Солнца каждые 88 земных дней.`,
        },
        {
          id: uuidv1(),
          title: 'Венера',
          context: `Венера медленно вращается в противоположном направлении от большинства планет. Густая атмосфера задерживает тепло в безудержном парниковом эффекте, что делает ее самой горячей планетой в нашей солнечной системе.`,
        },
        {
          id: uuidv1(),
          title: 'Земля',
          context: `Земля - наша родная планета - единственное место, которое мы знаем до сих пор, где обитают живые существа. Это также единственная планета в нашей солнечной системе с жидкой водой на поверхности.`,
        },
        {
          id: uuidv1(),
          title: 'Марс',
          context: `Марс - это пыльный, холодный, пустынный мир с очень тонкой атмосферой. Существуют убедительные доказательства того, что миллиарды лет назад Марс был более влажным и теплым с более плотной атмосферой.`,
        },
        {
          id: uuidv1(),
          title: 'Юпитер',
          context: `Юпитер более чем в два раза массивнее, чем другие планеты нашей Солнечной системы вместе взятые. Большое Красное пятно гигантской планеты - это многовековой шторм, превышающий Землю.`,
        },
        {
          id: uuidv1(),
          title: 'Сатурн',
          context: `Украшенный ослепительной сложной системой ледяных колец, Сатурн уникален в нашей солнечной системе. У других гигантских планет есть кольца, но ни одна из них не является столь же впечатляющей, как у Сатурна.`,
        },
        {
          id: uuidv1(),
          title: 'Уран',
          context: `Уран - седьмая планета от Солнца - вращается под углом почти 90 градусов от плоскости его орбиты. Этот уникальный наклон заставляет Уран вращаться на боку.`,
        },
        {
          id: uuidv1(),
          title: 'Нептун',
          context: `Нептун - восьмая и самая отдаленная главная планета, вращающаяся вокруг нашего Солнца, - темный, холодный и взбитый сверхзвуковыми ветрами. Это была первая планета, найденная с помощью математических расчетов.`,
        },
      ],
      viewOnly: false,
      checkedCards: [],
    };
  }

  // toggle view page mode
  toggleViewOnlyHandler = () => {
    this.setState({ viewOnly: !this.state.viewOnly });
  };

  // save card changes
  saveHandler = (id) => (value) => {
    this.setState({
      planets: this.state.planets.map((planet) => {
        return id === planet.id ? { ...planet, ...value } : planet;
      }),
    });
  };

  // delete picked planets from state
  deleteCardsHandler = () => {
    this.setState({
      planets: this.state.planets.filter((planet) => {
        return !this.state.checkedCards.includes(planet.id);
      }),
    });
    this.setState({ checkedCards: [] });
  };

  // add new planet to state, get values from AddCard
  addNewPlanetHandler = (values) => {
    const newPlanet = {
      id: values.id,
      title: values.title,
      context: values.context,
    };
    this.setState({ planets: [...this.state.planets, newPlanet] });
  };

  // add index of picked card or delete from array
  pickCardHandler = (id) => (isChecked) => {
    let newCheckedCards = this.state.checkedCards;
    // add card index if it picked
    if (isChecked) {
      newCheckedCards.push(id);
    } else {
      // delete from array if card has been unpicked
      const idx = newCheckedCards.findIndex((item) => item === id);
      newCheckedCards.splice(idx, 1);
    }
    this.setState({ checkedCards: newCheckedCards });
  };

  render() {
      return (
          <CradsContext.Provider value={{
            state: this.state,
            toggleView: this.toggleViewOnlyHandler,
            onSave: this.saveHandler,
            onDelete: this.deleteCardsHandler,
            addNew: this.addNewPlanetHandler,
            onPick: this.pickCardHandler,
          }}>      
              {this.props.children}
          </CradsContext.Provider>
     )
  }
}

export default CardsWrap;
