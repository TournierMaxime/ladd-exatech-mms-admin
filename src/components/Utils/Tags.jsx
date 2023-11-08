import React from 'react'
import { Tag } from 'primereact/tag';

const TagsMachinesStates = ({ content }) => {
    switch (content) {
        case 'ok':
            return <Tag className="w-8 mr-2" icon="pi pi-check" severity="success" value={'OK'} />
        case 'ko':
            return <Tag className="w-8 mr-2" icon="pi pi-times" severity="danger" value={'KO'} />
        default:
            return <Tag className="w-8 mr-2" icon="pi pi-exclamation-triangle" severity="warning" value={'Inconnu'} />
    }
}

const TagsTicketsStates = ({ content }) => {
    switch (content) {
        case 'closed':
            return <Tag className="w-8 mr-2" icon="pi pi-times" severity="danger" value={'Fermé'} />
        case 'in-progress':
            return <Tag className="w-12 mr-2" icon="pi pi-sync" severity="info" value={'En cours'} />
        default:
            return <Tag className="w-8 mr-2" icon="pi pi-check" severity="success" value={'Ouvert'} />
    }
}

const TagsInterventionsResults = ({ content }) => {
    switch (content) {
        case 'ko':
            return <Tag className="w-8 mr-2" icon="pi pi-times" severity="danger" value={'KO'} />
        case 'ok':
            return <Tag className="w-8 mr-2" icon="pi pi-check" severity="success" value={'OK'} />
        default:
            return <Tag className="w-12 mr-2" icon="pi pi-exclamation-triangle" severity="warning" value={'En attente'} />
    }
}

const TagsInterventionsStates = ({ content }) => {
    switch (content) {
        case 'validate':
            return <Tag className="w-8 mr-2" icon="pi pi-check" severity="info" value={'Validé'} />
        case 'ended':
            return <Tag className="w-8 mr-2" icon="pi pi-check-circle" severity="success" value={'Terminé'} />
        default:
            return <Tag className="w-8 mr-2" icon="pi pi-plus" severity="primary" value={'Nouveau'} />
    }
}

const TagsInterventionModes = ({ content }) => {
    switch (content) {
        case 'on spot':
            return <Tag className="w-10 mr-2" icon="pi pi-map-marker" severity="primary" value={'Sur place'} />
        case 'from distance':
            return <Tag className="w-10 mr-2" icon="pi pi-comments" severity="info" value={'A distance'} />
        default:
            return <Tag className="w-10 mr-2" icon="pi pi-exclamation-triangle" severity="warning" value={'NULL'} />
    }
}

export { TagsMachinesStates, TagsTicketsStates, TagsInterventionsResults, TagsInterventionsStates, TagsInterventionModes }