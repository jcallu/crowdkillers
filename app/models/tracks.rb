class Tracks
  require 'soundcloud'

  def self.results
    new
  end
  
  def tracks
    # create a client object with your app credentials
    client = Soundcloud.new(:client_id => '34193081efa50d54454ae6d307453e2c')

    # get a tracks oembed data
    track_url = 'http://soundcloud.com/crowdkillers'
    embed_info = client.get('/oembed', :url => track_url, :id => 'sc-widget') 
    embed_info
  end
end
