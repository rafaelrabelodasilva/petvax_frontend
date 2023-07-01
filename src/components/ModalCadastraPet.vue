<template>
    <div
        class="modal fade"
        id="cadastrarPet"
        aria-hidden="true"
        aria-labelledby="dadosPet"
        tabindex="-1"
    >
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="dadosPet">
                Formulário de cadastro do pet
            </h1>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
            </div>

            <div class="modal-body">
            <form @submit.prevent="cadastrarPet" class="row g-3">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
                Dados do pet
                </h1>

                <div class="col-md-4">
                <label for="nomePet" class="form-label">Nome do pet</label>

                <input
                    v-model="pet.petName"
                    type="text"
                    class="form-control"
                    id="nomePet"
                />
                </div>

                <div class="col-md-4">
                <label for="especiePet" class="form-label">Espécie</label>
                <select
                    v-model="pet.petSpecies"
                    id="especiePet"
                    class="form-select"
                >
                    <option>Canina</option>
                    <option>Felina</option>
                </select>
                </div>

                <div class="col-md-4">
                <label for="generoPet" class="form-label">Gênero</label>
                <select
                    v-model="pet.petGender"
                    id="generoPet"
                    class="form-select"
                >
                    <option>Fêmea</option>
                    <option>Macho</option>
                </select>
                </div>

                <div class="col-md-4">
                <label for="racaPet" class="form-label">Raça</label>
                <select v-model="pet.petBreed" id="racaPet" class="form-select">
                    <option>Persa e Himalaia</option>
                    <option>Siamês</option>
                    <option>Maine Coon</option>
                    <option>Angorá</option>
                    <option>Sphynx</option>
                    <option>Ragdoll</option>
                    <option>Ashera</option>
                    <option>American Shorthair</option>
                    <option>Exótico</option>
                    <option>Sem raça definida (SRC)</option>
                </select>
                </div>

                <div class="col-md-4">
                <label for="pesoPet" class="form-label">Peso do pet</label>
                <div class="input-group">
                    <input
                    v-model="pet.petWeight"
                    type="number"
                    class="form-control"
                    id="pesoPet"
                    />
                    <span class="input-group-text">kg</span>
                </div>
                </div>

                <div class="col-md-4">
                <label for="nascimentoPet" class="form-label">Nascimento</label>
                <input
                    v-model="pet.petBirth"
                    type="date"
                    class="form-control"
                    id="nascimentoPet"
                />
                </div>

                <div class="col-md-4">
                <label for="castradoPet" class="form-label">Castrado?</label>
                <select
                    v-model="pet.petCastrated"
                    id="castradoPet"
                    class="form-select"
                >
                    <option>Sim</option>
                    <option>Não</option>
                </select>
                </div>

                <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
                Dados do responsável
                </h1>

                <div class="col-md-6">
                <label for="nomeRespPet" class="form-label">Primeiro nome</label>
                <input
                    v-model="pet.petResponsible.petRespFirstName"
                    type="text"
                    class="form-control"
                    id="nomeRespPet"
                />
                </div>

                <div class="col-md-6">
                <label for="sobrenomeRespPet" class="form-label">Sobrenome</label>
                <input
                    v-model="pet.petResponsible.petRespLastName"
                    type="text"
                    class="form-control"
                    id="sobrenomeRespPet"
                />
                </div>

                <div class="col-6">
                <label for="contato1RespPet" class="form-label"
                    >Contato principal</label
                >
                <input
                    v-model="pet.petResponsible.petRespContact1"
                    type="text"
                    class="form-control"
                    id="contato1RespPet"
                />
                </div>

                <div class="col-6">
                <label for="contato2RespPet" class="form-label"
                    >Contato adicional</label
                >
                <input
                    v-model="pet.petResponsible.petRespContact2"
                    type="text"
                    class="form-control"
                    id="contato2RespPet"
                />
                </div>
            </form>
            </div>

            <div class="modal-footer">
            <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Cancelar
            </button>

            <button
                @click="cadastrarPet()"
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
            >
                Salvar
            </button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ModalCadastraPet",
};
</script>