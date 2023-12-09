import React from 'react'

const AddMovie = () => {
  return (
    <>
				<div class="col-12">
					<div class="main__title">
						<h2>Add new item</h2>
					</div>
				</div>

				<div class="col-12">
					<form action="add-item.html#" class="form">
						<div class="row">
							<div class="col-12 col-md-5 form__cover">
								<div class="row">
									<div class="col-12 col-sm-6 col-md-12">
										<div class="form__img">
											<label for="form__img-upload">Upload cover (190 x 270)</label>
											<input id="form__img-upload" name="form__img-upload" type="file" accept=".png, .jpg, .jpeg" />
											<img id="form__img" src="add-item.html#" alt=" " />
										</div>
									</div>
								</div>
							</div>

							<div class="col-12 col-md-7 form__content">
								<div class="row">
									<div class="col-12">
										<div class="form__group">
											<input type="text" class="form__input" placeholder="Title" />
										</div>
									</div>

									<div class="col-12">
										<div class="form__group">
											<textarea id="text" name="text" class="form__textarea" placeholder="Description"></textarea>
										</div>
									</div>

									<div class="col-12 col-sm-6 col-lg-3">
										<div class="form__group">
											<input type="text" class="form__input" placeholder="Release year" />
										</div>
									</div>

									<div class="col-12 col-sm-6 col-lg-3">
										<div class="form__group">
											<input type="text" class="form__input" placeholder="Running timed in minutes" />
										</div>
									</div>

									<div class="col-12 col-sm-6 col-lg-3">
										<div class="form__group">
											<select class="js-example-basic-single" id="quality">
												<option value="FullHD">FullHD</option>
												<option value="HD">HD</option>
											</select>
										</div>
									</div>

									<div class="col-12 col-sm-6 col-lg-3">
										<div class="form__group">
											<input type="text" class="form__input" placeholder="Age"/>
										</div>
									</div>

									<div class="col-12 col-lg-6">
										<div class="form__group">
											<select class="js-example-basic-multiple" id="country" multiple="multiple">
												<option value="Afghanistan">Afghanistan</option>
												
											</select>
										</div>
									</div>

									<div class="col-12 col-lg-6">
										<div class="form__group">
											<select class="js-example-basic-multiple" id="genre" multiple="multiple">
												<option value="Action">Action</option>
												<option value="Animation">Animation</option>
												<option value="Comedy">Comedy</option>
												<option value="Crime">Crime</option>
												<option value="Drama">Drama</option>
												<option value="Fantasy">Fantasy</option>
												<option value="Historical">Historical</option>
												<option value="Horror">Horror</option>
												<option value="Romance">Romance</option>
												<option value="Science-fiction">Science-fiction</option>
												<option value="Thriller">Thriller</option>
												<option value="Western">Western</option>
												<option value="Otheer">Otheer</option>
											</select>
										</div>
									</div>

									<div class="col-12">
										<div class="form__gallery">
											<label id="gallery1" for="form__gallery-upload">Upload photos</label>
											<input data-name="#gallery1" id="form__gallery-upload" name="gallery" class="form__gallery-upload" type="file" accept=".png, .jpg, .jpeg" multiple />
										</div>
									</div>
								</div>
							</div>

							<div class="col-12">
								<ul class="form__radio">
									<li>
										<span>Item type:</span>
									</li>
									<li>
										<input id="type1" type="radio" name="type" checked=""/>
										<label for="type1">Movie</label>
									</li>
									<li>
										<input id="type2" type="radio" name="type"/>
										<label for="type2">TV Show</label>
									</li>
								</ul>
							</div>
							
							<div class="col-12">
								<div class="row">
									<div class="col-12 col-lg-6">
										<div class="form__video">
											<label id="movie1" for="form__video-upload">Upload video</label>
											<input data-name="#movie1" id="form__video-upload" name="movie" class="form__video-upload" type="file" accept="video/mp4,video/x-m4v,video/*"/>
										</div>
									</div>

									<div class="col-12 col-lg-6">
										<div class="form__group form__group--link">
											<input type="text" class="form__input" placeholder="or add a link"/>
										</div>
									</div>

									<div class="col-12">
										<button type="button" class="form__btn">publish</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
    </>
  )
}

export default AddMovie