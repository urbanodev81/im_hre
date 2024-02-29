    import { View, Text, TouchableOpacity } from "react-native";

    import { styles } from "./styles";

    export function Participant(){
        return(
            <View>
                <Text style={styles.container}>Ricardo</Text>
                <TouchableOpacity style={styles.button}>
                    <Text>
                        -
                    </Text>
                </TouchableOpacity>    
            </View>
            )      
    }