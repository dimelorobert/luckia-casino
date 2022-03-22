<template>
	<div class="registro">
		<form class="box mod-xs">
			<br />
			<div class="field">
				<img
					class="logo"
					src="../assets/innovapro.png"
					alt="Logo Beils Beauty Bar"
				/>
			</div>
			<h3 class="title is-3">Nueva ficha</h3>
			<div class="field">
				<div class="control">
					<label class="label">Nombre</label>
					<input class="input" type="text" :placeholder="placeholder" />
				</div>
			</div>
			<div class="field">
				<div class="control">
					<label class="label">Apellidos</label>
					<input class="input" type="text" :placeholder="placeholder" />
				</div>
			</div>
			<div class="field">
				<div class="control">
					<label class="radio">
						<input type="radio" name="answer" />
						Hombre
					</label>
					<label class="radio">
						<input type="radio" name="answer" />
						Mujer
					</label>
				</div>
			</div>
			<div class="field">
				<label class="label">Fecha de nacimiento</label>
				<div class="control cont-xs">
					<div class="select">
						<select>
							<option>01</option>
							<option>02</option>
							<option>03</option>
							<option>04</option>
						</select>
					</div>

					<div class="select">
						<select>
							<option>01</option>
							<option>02</option>
							<option>03</option>
							<option>04</option>
							<option>05</option>
							<option>06</option>
							<option>07</option>
							<option>08</option>
							<option>09</option>
							<option>10</option>
							<option>11</option>
							<option>12</option>
						</select>
					</div>

					<div class="select">
						<select>
							<option>1990</option>
							<option>1991</option>
							<option>1992</option>
							<option>1993</option>
						</select>
					</div>
				</div>
			</div>

			<div class="field">
				<div class="control">
					<label class="label">Dirección</label>
					<input class="input" type="text" :placeholder="placeholder" />
				</div>
			</div>
			<div class="field">
				<div class="control">
					<label class="label">Telefono</label>
					<input class="input" type="text" :placeholder="placeholder" />
				</div>
			</div>
			<div class="field">
				<label class="label">Email</label>
				<div class="control">
					<input class="input" type="email" :placeholder="placeholder" />
				</div>
			</div>
			<div class="field">
				<div class="control">
					<label class="radio">
						<input type="radio" name="answer" />
						D.N.I
					</label>
					<label class="radio">
						<input type="radio" name="answer" />
						Pasaporte
					</label>
					<label class="radio">
						<input type="radio" name="answer" />
						N.I.E
					</label>
				</div>
			</div>
			<div class="field">
				<label class="label">Numero Documento</label>
				<div class="control">
					<input class="input" type="text" :placeholder="placeholder" />
				</div>
			</div>

			<!-- <div class="field">
                    <div class="file has-name is-right">
                         <label class="file-label">
                              <input
                                   class="file-input"
                                   type="file"
                                   name="resume"
                              />
                              <span class="file-cta">
                                   <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                   </span>
                                   <span class="file-label"> Foto D.N.I </span>
                              </span>
                              <span class="file-name width-xs">
                                   Screenshot.png
                              </span>
                         </label>
                    </div>
               </div>

               <div class="field">
                    <div class="file has-name is-right">
                         <label class="file-label">
                              <input
                                   class="file-input"
                                   type="file"
                                   name="resume"
                              />
                              <span class="file-cta">
                                   <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                   </span>
                                   <span class="file-label">
                                        Foto Cliente
                                   </span>
                              </span>
                              <span class="file-name width-xs">
                                   Filename-2345643.png
                              </span>
                         </label>
                    </div>
               </div>

               <div class="field">
                    <div class="file has-name is-right">
                         <label class="file-label">
                              <input
                                   class="file-input"
                                   type="file"
                                   name="resume"
                              />
                              <span class="file-cta">
                                   <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                   </span>
                                   <span class="file-label">
                                        Proteccion datos
                                   </span>
                              </span>
                              <span class="file-name width-xs">
                                   Doc firmado
                              </span>
                         </label>
                    </div>
               </div>

               <div class="field">
                    <div class="file has-name is-right">
                         <label class="file-label">
                              <input
                                   class="file-input"
                                   type="file"
                                   name="resume"
                              />
                              <span class="file-cta">
                                   <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                   </span>
                                   <span class="file-label">
                                        Consentimiento
                                   </span>
                              </span>
                              <span class="file-name width-xs"> file.png </span>
                         </label>
                    </div>
               </div> -->

			<button class="button is-primary">Crear Ficha</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			placeholder: "",
		};
	},
};
</script>

<style scoped></style>
