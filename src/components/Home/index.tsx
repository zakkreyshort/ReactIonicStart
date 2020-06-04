import React, { Component } from 'react';
import { IonApp, IonContent, IonCard, IonTabs, IonCardHeader, IonCardTitle, IonCardSubtitle, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route } from 'react-router-dom';
import { IonPage } from '@ionic/react';
import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import Tab3 from '../Tab3';

class Home extends Component {
    render() {
        return (
            <IonApp>
                <IonPage>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Route />
                            <Route />
                            <Route />
                        </IonRouterOutlet>

                        <IonTabBar>
                            <IonTabButton>
                                <IonIcon />
                                <IonLabel></IonLabel>
                            </IonTabButton>
                            <IonTabButton>
                                <IonIcon />
                                <IonLabel></IonLabel>
                            </IonTabButton>
                            <IonTabButton>
                                <IonIcon />
                                <IonLabel></IonLabel>
                            </IonTabButton>
                        </IonTabBar>

                    </IonTabs>
                </IonPage>
            </IonApp>
        )
    }
}

