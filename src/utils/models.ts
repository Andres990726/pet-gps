interface Feed {
  created_at: string;
  entry_id: number;
  field1: string;
  field2: string;
}

interface Channel {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  field1: string;
  field2: string;
  created_at: string;
  updated_at: string;
  last_entry_id: number;
}

export interface IDataModel {
  channel: Channel;
  feeds: Feed[];
}
