import styled from "styled-components";


export const Div = {
    container: styled.div`
        input {
            border-width: 1px;
            border: 1px solid var(--pPurple-800);
        }

        input:placeholder {
            font-weight: 400;
            font-size: 1rem;
            line-height: 140%;
        }

        button {
            font-weight: 700;
            
            /* min-width: 90px; */
        }

        input:focus {
            border: 1px solid var(--pPurple-400);
        }
    `,
}