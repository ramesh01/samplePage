import styled from "styled-components";

export const StyledApplicantTabs = styled.div `
    ul.nav-fill {
        border-bottom: none;
    }
    .nav-item {
        font-weight: 800;
        color: blue;
        background-color: #00c2ff21;
        margin: 5px;
    }

    .tabs .nav-link.active {
        border-color: none;
    }

    .tab-form-header {
        text-transform: uppercase;
        border-bottom: 1px solid #000;
    }

    .form-label {
        font-size: 14px;
        font-weight: 800;
    }
`