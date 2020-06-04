import React from 'react';
import { IonApp, IonContent, IonCard, IonList, IonTabs, IonHeader, IonCardHeader, IonCardTitle, IonCardSubtitle, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonSelectOption, IonSelect, IonItem, IonDatetime } from '@ionic/react';

export default class Tab1 extends React.Component {
    render() {
        return (<>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Tab 1</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <div className="ion-padding about-info">
                <h4>Title goes here</h4>

                <IonList>
                    <IonItem>
                        <IonIcon></IonIcon>
                        <IonLabel></IonLabel>
                        <IonDatetime></IonDatetime>
                    </IonItem>

                    <IonItem>
                        
                    </IonItem>

                </IonList>

            </div>
        </IonContent>
        )
    }
}
