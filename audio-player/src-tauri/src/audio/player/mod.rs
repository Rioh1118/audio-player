pub mod mp3;
pub mod wav;

pub struct AudioManager {
    pub file_path: String,
    pub sink: rodio::Sink,
    pub duration: f64,
}
