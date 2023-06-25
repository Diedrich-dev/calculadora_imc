import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  //API para acionar a vibração do celular
  Vibration,
  //API para deixar toda a área clicavel
  Pressable,
  //API para trabalhar com o teclado
  Keyboard,
  FlatList,
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {

  const [heigth, setHeight] = useState(null)
  const [weight, setWeigth] = useState(null)
  const [messageImc, setMessageImc] = useState("preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")
  const [errorMessage, setErrorMessage] = useState(null)
  const [imcList, setImcList] = useState([])

  function imcCalculator() {
    let heightFormat = heigth.replace(",", ".")
    let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2)
    setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }])
    setImc(totalImc)
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate()
      setErrorMessage("campo obrigatório*")
    }
  }

  function validationImc() {
    if (weight != null && heigth != null) {
      imcCalculator()
      setHeight(null)
      setWeigth(null)
      setMessageImc("Seu IMC é igual:")
      setTextButton("Calcular Novamente")
      setErrorMessage(null)
    } else {
      setImc(null)
      verificationImc()
      setTextButton("Calcular")
      setMessageImc("preencha o peso e altura")
    }
  }

  return (
    <View
      style={styles.formContext}>
      {imc == null ?
        <Pressable
          onPress={Keyboard.dismiss}
          style={styles.form}>
          <Text
            style={styles.formLabel}>
            Altura
          </Text>
          <Text
            style={styles.errorMessage}>
            {errorMessage}
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={heigth}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
          />
          <Text
            style={styles.formLabel}>
            Peso
          </Text>
          <Text
            style={styles.errorMessage}>
            {errorMessage}
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeigth}
            value={weight}
            placeholder="Ex. 75.465"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => {
              validationImc()
            }}>
            <Text
              style={styles.textButtonCalculator}>
              {textButton}
            </Text>
          </TouchableOpacity>
        </Pressable>
        :
        <View
          style={styles.exibitionResultImc}>
          <ResultImc
            messageResultImc={messageImc}
            resultImc={imc} />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => {
              validationImc()
            }}>
            <Text
              style={styles.textButtonCalculator}>
              {textButton}
            </Text>
          </TouchableOpacity>
        </View>
      }
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listImcs}
        //Array sempre vai dentro de data
        data={imcList.reverse()}
        renderItem={({ item }) => {
          return (
            <View style={styles.resultTextPlusItem}>
              <Text
                style={styles.textResultItemList}>
                Resultado IMC = { }
                <Text
                  style={styles.resultImcItem}>
                  {item.imc}
                </Text>
              </Text>
            </View>
          )
        }}
        //para cada item tem uma chave unica
        keyExtractor={(item) => {
          item.id
        }}>
      </FlatList>
    </View>
  );
}