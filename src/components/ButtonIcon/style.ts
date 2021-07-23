import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        top: '-15%',
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'        
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 16,
        textAlign: 'center'
    }, 
    icone: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.line,
    },
    icon: {
        width: 32,
        height: 24,

    }
});