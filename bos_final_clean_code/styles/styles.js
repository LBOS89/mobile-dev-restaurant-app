import { StyleSheet } from 'react-native'; 

export const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#FAFDF7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    registrationContainer: {
        flex: 1,
        backgroundColor: '#E8F5E8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirmationContainer: {
        flex: 1,
        backgroundColor: '#ffdbef',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectorContainer: {
        flex: 1,
        backgroundColor: '#afc9c0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleContainer: {
        marginTop: 150,
        textAlign: 'center'
    },    
    titleName: {       
        color: '#8D205A',
        textAlign: 'center',
        fontSize: 70
    },   
    secondaryTitleName: {
        color: '#54133a',
        textAlign: 'center',
        fontSize: 40
    },
    thirdTitleName: {
        color: '#0B410B',
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold'
    },
    registrationTitleName: {       
        color: '#092B46',
        textAlign: 'center',
        fontSize: 70,
        marginTop: 70
    },  
    confirmationTitleName: {
        color: '#590f38',
        textAlign: 'center',
        fontSize: 55
    },
    buttonContainer: {
        paddingVertical: 20,
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      },
    form: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      paddingBottom: 50
    },
    content: {
        fontSize: 20,
        marginTop: 15,
        marginBottom: 10,
        textAlign: 'center',
        color: '#6b2a4e'
    },
    image: {
        height: 200,
        width: 200,
        marginBottom: 10
    },
    input: {
        borderWidth: 3,
        borderColor: '#2f302f',
        width: 250,
        marginVertical: 10,
        padding: 5
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    }
});