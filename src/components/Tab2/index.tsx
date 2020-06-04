import React from 'react';
import { IonApp, IonContent, IonCard, IonList, IonTabs, IonHeader, IonCardHeader, IonCardTitle, IonCardSubtitle, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonSelectOption, IonSelect, IonItem, IonDatetime } from '@ionic/react';

export default class Tab2 extends React.Component {
    render() {
        return (<>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Tab 2</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <div className="ion-padding about-info">
                <h4>Title goes here</h4>

                <IonList lines="none">
                    <IonItem>
                        <IonIcon name="calendar" slot="start"></IonIcon>
                        <IonLabel>Date Picker!</IonLabel>
                        <IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
                    </IonItem>

                    <IonItem>
                        <IonIcon name="pin" slot="start"></IonIcon>
                        <IonLabel>Selector</IonLabel>
                        <IonSelect>
                            <IonSelectOption value="portland">Portland, Or</IonSelectOption>
                            <IonSelectOption value="denver">Denver, Co</IonSelectOption>
                            <IonSelectOption value="seattle">Seattle, Wa</IonSelectOption>
                            <IonSelectOption value="sf">San Francisco, Ca</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>

                <p>
                    Could add some stuff here for fun!
                </p>

            </div>
        </IonContent>
        </>)
    }
}