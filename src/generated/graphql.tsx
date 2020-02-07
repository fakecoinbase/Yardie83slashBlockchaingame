import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  timestamp: any,
};

export type Bloxx_Address = {
   __typename?: 'bloxx_address',
  balance?: Maybe<Scalars['Int']>,
  id: Scalars['String'],
  node: Bloxx_Node,
  nodePublicKey: Scalars['String'],
  transactions: Array<Bloxx_Transaction>,
  transactionsByInputaddress: Array<Bloxx_Transaction>,
  transactionsByInputaddress_aggregate: Bloxx_Transaction_Aggregate,
  transactions_aggregate: Bloxx_Transaction_Aggregate,
};


export type Bloxx_AddressTransactionsArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


export type Bloxx_AddressTransactionsByInputaddressArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


export type Bloxx_AddressTransactionsByInputaddress_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


export type Bloxx_AddressTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};

export type Bloxx_Address_Aggregate = {
   __typename?: 'bloxx_address_aggregate',
  aggregate?: Maybe<Bloxx_Address_Aggregate_Fields>,
  nodes: Array<Bloxx_Address>,
};

export type Bloxx_Address_Aggregate_Fields = {
   __typename?: 'bloxx_address_aggregate_fields',
  avg?: Maybe<Bloxx_Address_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Bloxx_Address_Max_Fields>,
  min?: Maybe<Bloxx_Address_Min_Fields>,
  stddev?: Maybe<Bloxx_Address_Stddev_Fields>,
  stddev_pop?: Maybe<Bloxx_Address_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Bloxx_Address_Stddev_Samp_Fields>,
  sum?: Maybe<Bloxx_Address_Sum_Fields>,
  var_pop?: Maybe<Bloxx_Address_Var_Pop_Fields>,
  var_samp?: Maybe<Bloxx_Address_Var_Samp_Fields>,
  variance?: Maybe<Bloxx_Address_Variance_Fields>,
};


export type Bloxx_Address_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bloxx_Address_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Bloxx_Address_Aggregate_Order_By = {
  avg?: Maybe<Bloxx_Address_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Bloxx_Address_Max_Order_By>,
  min?: Maybe<Bloxx_Address_Min_Order_By>,
  stddev?: Maybe<Bloxx_Address_Stddev_Order_By>,
  stddev_pop?: Maybe<Bloxx_Address_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Bloxx_Address_Stddev_Samp_Order_By>,
  sum?: Maybe<Bloxx_Address_Sum_Order_By>,
  var_pop?: Maybe<Bloxx_Address_Var_Pop_Order_By>,
  var_samp?: Maybe<Bloxx_Address_Var_Samp_Order_By>,
  variance?: Maybe<Bloxx_Address_Variance_Order_By>,
};

export type Bloxx_Address_Arr_Rel_Insert_Input = {
  data: Array<Bloxx_Address_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Address_On_Conflict>,
};

export type Bloxx_Address_Avg_Fields = {
   __typename?: 'bloxx_address_avg_fields',
  balance?: Maybe<Scalars['Float']>,
};

export type Bloxx_Address_Avg_Order_By = {
  balance?: Maybe<Order_By>,
};

export type Bloxx_Address_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bloxx_Address_Bool_Exp>>>,
  _not?: Maybe<Bloxx_Address_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Bloxx_Address_Bool_Exp>>>,
  balance?: Maybe<Int_Comparison_Exp>,
  id?: Maybe<String_Comparison_Exp>,
  node?: Maybe<Bloxx_Node_Bool_Exp>,
  nodePublicKey?: Maybe<String_Comparison_Exp>,
  transactions?: Maybe<Bloxx_Transaction_Bool_Exp>,
  transactionsByInputaddress?: Maybe<Bloxx_Transaction_Bool_Exp>,
};

export enum Bloxx_Address_Constraint {
  AddressAddressidKey = 'address_addressid_key',
  AddressPkey = 'address_pkey'
}

export type Bloxx_Address_Inc_Input = {
  balance?: Maybe<Scalars['Int']>,
};

export type Bloxx_Address_Insert_Input = {
  balance?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  node?: Maybe<Bloxx_Node_Obj_Rel_Insert_Input>,
  nodePublicKey?: Maybe<Scalars['String']>,
  transactions?: Maybe<Bloxx_Transaction_Arr_Rel_Insert_Input>,
  transactionsByInputaddress?: Maybe<Bloxx_Transaction_Arr_Rel_Insert_Input>,
};

export type Bloxx_Address_Max_Fields = {
   __typename?: 'bloxx_address_max_fields',
  balance?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  nodePublicKey?: Maybe<Scalars['String']>,
};

export type Bloxx_Address_Max_Order_By = {
  balance?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  nodePublicKey?: Maybe<Order_By>,
};

export type Bloxx_Address_Min_Fields = {
   __typename?: 'bloxx_address_min_fields',
  balance?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  nodePublicKey?: Maybe<Scalars['String']>,
};

export type Bloxx_Address_Min_Order_By = {
  balance?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  nodePublicKey?: Maybe<Order_By>,
};

export type Bloxx_Address_Mutation_Response = {
   __typename?: 'bloxx_address_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Bloxx_Address>,
};

export type Bloxx_Address_Obj_Rel_Insert_Input = {
  data: Bloxx_Address_Insert_Input,
  on_conflict?: Maybe<Bloxx_Address_On_Conflict>,
};

export type Bloxx_Address_On_Conflict = {
  constraint: Bloxx_Address_Constraint,
  update_columns: Array<Bloxx_Address_Update_Column>,
  where?: Maybe<Bloxx_Address_Bool_Exp>,
};

export type Bloxx_Address_Order_By = {
  balance?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  node?: Maybe<Bloxx_Node_Order_By>,
  nodePublicKey?: Maybe<Order_By>,
  transactionsByInputaddress_aggregate?: Maybe<Bloxx_Transaction_Aggregate_Order_By>,
  transactions_aggregate?: Maybe<Bloxx_Transaction_Aggregate_Order_By>,
};

export enum Bloxx_Address_Select_Column {
  Balance = 'balance',
  Id = 'id',
  NodePublicKey = 'nodePublicKey'
}

export type Bloxx_Address_Set_Input = {
  balance?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['String']>,
  nodePublicKey?: Maybe<Scalars['String']>,
};

export type Bloxx_Address_Stddev_Fields = {
   __typename?: 'bloxx_address_stddev_fields',
  balance?: Maybe<Scalars['Float']>,
};

export type Bloxx_Address_Stddev_Order_By = {
  balance?: Maybe<Order_By>,
};

export type Bloxx_Address_Stddev_Pop_Fields = {
   __typename?: 'bloxx_address_stddev_pop_fields',
  balance?: Maybe<Scalars['Float']>,
};

export type Bloxx_Address_Stddev_Pop_Order_By = {
  balance?: Maybe<Order_By>,
};

export type Bloxx_Address_Stddev_Samp_Fields = {
   __typename?: 'bloxx_address_stddev_samp_fields',
  balance?: Maybe<Scalars['Float']>,
};

export type Bloxx_Address_Stddev_Samp_Order_By = {
  balance?: Maybe<Order_By>,
};

export type Bloxx_Address_Sum_Fields = {
   __typename?: 'bloxx_address_sum_fields',
  balance?: Maybe<Scalars['Int']>,
};

export type Bloxx_Address_Sum_Order_By = {
  balance?: Maybe<Order_By>,
};

export enum Bloxx_Address_Update_Column {
  Balance = 'balance',
  Id = 'id',
  NodePublicKey = 'nodePublicKey'
}

export type Bloxx_Address_Var_Pop_Fields = {
   __typename?: 'bloxx_address_var_pop_fields',
  balance?: Maybe<Scalars['Float']>,
};

export type Bloxx_Address_Var_Pop_Order_By = {
  balance?: Maybe<Order_By>,
};

export type Bloxx_Address_Var_Samp_Fields = {
   __typename?: 'bloxx_address_var_samp_fields',
  balance?: Maybe<Scalars['Float']>,
};

export type Bloxx_Address_Var_Samp_Order_By = {
  balance?: Maybe<Order_By>,
};

export type Bloxx_Address_Variance_Fields = {
   __typename?: 'bloxx_address_variance_fields',
  balance?: Maybe<Scalars['Float']>,
};

export type Bloxx_Address_Variance_Order_By = {
  balance?: Maybe<Order_By>,
};

export type Bloxx_Block = {
   __typename?: 'bloxx_block',
  blockHash: Scalars['String'],
  blockNumber: Scalars['Int'],
  blockStatus: Scalars['String'],
  block_transactions: Array<Bloxx_Block_Transaction>,
  block_transactions_aggregate: Bloxx_Block_Transaction_Aggregate,
  createdAt: Scalars['timestamp'],
  difficulty: Scalars['Int'],
  merkleRoot: Scalars['String'],
  nonce: Scalars['Int'],
  previousBlockHash?: Maybe<Scalars['String']>,
};


export type Bloxx_BlockBlock_TransactionsArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Block_Transaction_Bool_Exp>
};


export type Bloxx_BlockBlock_Transactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Block_Transaction_Bool_Exp>
};

export type Bloxx_Block_Aggregate = {
   __typename?: 'bloxx_block_aggregate',
  aggregate?: Maybe<Bloxx_Block_Aggregate_Fields>,
  nodes: Array<Bloxx_Block>,
};

export type Bloxx_Block_Aggregate_Fields = {
   __typename?: 'bloxx_block_aggregate_fields',
  avg?: Maybe<Bloxx_Block_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Bloxx_Block_Max_Fields>,
  min?: Maybe<Bloxx_Block_Min_Fields>,
  stddev?: Maybe<Bloxx_Block_Stddev_Fields>,
  stddev_pop?: Maybe<Bloxx_Block_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Bloxx_Block_Stddev_Samp_Fields>,
  sum?: Maybe<Bloxx_Block_Sum_Fields>,
  var_pop?: Maybe<Bloxx_Block_Var_Pop_Fields>,
  var_samp?: Maybe<Bloxx_Block_Var_Samp_Fields>,
  variance?: Maybe<Bloxx_Block_Variance_Fields>,
};


export type Bloxx_Block_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bloxx_Block_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Bloxx_Block_Aggregate_Order_By = {
  avg?: Maybe<Bloxx_Block_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Bloxx_Block_Max_Order_By>,
  min?: Maybe<Bloxx_Block_Min_Order_By>,
  stddev?: Maybe<Bloxx_Block_Stddev_Order_By>,
  stddev_pop?: Maybe<Bloxx_Block_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Bloxx_Block_Stddev_Samp_Order_By>,
  sum?: Maybe<Bloxx_Block_Sum_Order_By>,
  var_pop?: Maybe<Bloxx_Block_Var_Pop_Order_By>,
  var_samp?: Maybe<Bloxx_Block_Var_Samp_Order_By>,
  variance?: Maybe<Bloxx_Block_Variance_Order_By>,
};

export type Bloxx_Block_Arr_Rel_Insert_Input = {
  data: Array<Bloxx_Block_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Block_On_Conflict>,
};

export type Bloxx_Block_Avg_Fields = {
   __typename?: 'bloxx_block_avg_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  nonce?: Maybe<Scalars['Float']>,
};

export type Bloxx_Block_Avg_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

export type Bloxx_Block_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bloxx_Block_Bool_Exp>>>,
  _not?: Maybe<Bloxx_Block_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Bloxx_Block_Bool_Exp>>>,
  blockHash?: Maybe<String_Comparison_Exp>,
  blockNumber?: Maybe<Int_Comparison_Exp>,
  blockStatus?: Maybe<String_Comparison_Exp>,
  block_transactions?: Maybe<Bloxx_Block_Transaction_Bool_Exp>,
  createdAt?: Maybe<Timestamp_Comparison_Exp>,
  difficulty?: Maybe<Int_Comparison_Exp>,
  merkleRoot?: Maybe<String_Comparison_Exp>,
  nonce?: Maybe<Int_Comparison_Exp>,
  previousBlockHash?: Maybe<String_Comparison_Exp>,
};

export enum Bloxx_Block_Constraint {
  BlockBlockHashKey = 'block_blockHash_key',
  BlockPkey = 'block_pkey'
}

export type Bloxx_Block_Inc_Input = {
  blockNumber?: Maybe<Scalars['Int']>,
  difficulty?: Maybe<Scalars['Int']>,
  nonce?: Maybe<Scalars['Int']>,
};

export type Bloxx_Block_Insert_Input = {
  blockHash?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<Scalars['Int']>,
  blockStatus?: Maybe<Scalars['String']>,
  block_transactions?: Maybe<Bloxx_Block_Transaction_Arr_Rel_Insert_Input>,
  createdAt?: Maybe<Scalars['timestamp']>,
  difficulty?: Maybe<Scalars['Int']>,
  merkleRoot?: Maybe<Scalars['String']>,
  nonce?: Maybe<Scalars['Int']>,
  previousBlockHash?: Maybe<Scalars['String']>,
};

export type Bloxx_Block_Max_Fields = {
   __typename?: 'bloxx_block_max_fields',
  blockHash?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<Scalars['Int']>,
  blockStatus?: Maybe<Scalars['String']>,
  difficulty?: Maybe<Scalars['Int']>,
  merkleRoot?: Maybe<Scalars['String']>,
  nonce?: Maybe<Scalars['Int']>,
  previousBlockHash?: Maybe<Scalars['String']>,
};

export type Bloxx_Block_Max_Order_By = {
  blockHash?: Maybe<Order_By>,
  blockNumber?: Maybe<Order_By>,
  blockStatus?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  merkleRoot?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
  previousBlockHash?: Maybe<Order_By>,
};

export type Bloxx_Block_Min_Fields = {
   __typename?: 'bloxx_block_min_fields',
  blockHash?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<Scalars['Int']>,
  blockStatus?: Maybe<Scalars['String']>,
  difficulty?: Maybe<Scalars['Int']>,
  merkleRoot?: Maybe<Scalars['String']>,
  nonce?: Maybe<Scalars['Int']>,
  previousBlockHash?: Maybe<Scalars['String']>,
};

export type Bloxx_Block_Min_Order_By = {
  blockHash?: Maybe<Order_By>,
  blockNumber?: Maybe<Order_By>,
  blockStatus?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  merkleRoot?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
  previousBlockHash?: Maybe<Order_By>,
};

export type Bloxx_Block_Mutation_Response = {
   __typename?: 'bloxx_block_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Bloxx_Block>,
};

export type Bloxx_Block_Obj_Rel_Insert_Input = {
  data: Bloxx_Block_Insert_Input,
  on_conflict?: Maybe<Bloxx_Block_On_Conflict>,
};

export type Bloxx_Block_On_Conflict = {
  constraint: Bloxx_Block_Constraint,
  update_columns: Array<Bloxx_Block_Update_Column>,
  where?: Maybe<Bloxx_Block_Bool_Exp>,
};

export type Bloxx_Block_Order_By = {
  blockHash?: Maybe<Order_By>,
  blockNumber?: Maybe<Order_By>,
  blockStatus?: Maybe<Order_By>,
  block_transactions_aggregate?: Maybe<Bloxx_Block_Transaction_Aggregate_Order_By>,
  createdAt?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  merkleRoot?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
  previousBlockHash?: Maybe<Order_By>,
};

export enum Bloxx_Block_Select_Column {
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  BlockStatus = 'blockStatus',
  CreatedAt = 'createdAt',
  Difficulty = 'difficulty',
  MerkleRoot = 'merkleRoot',
  Nonce = 'nonce',
  PreviousBlockHash = 'previousBlockHash'
}

export type Bloxx_Block_Set_Input = {
  blockHash?: Maybe<Scalars['String']>,
  blockNumber?: Maybe<Scalars['Int']>,
  blockStatus?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['timestamp']>,
  difficulty?: Maybe<Scalars['Int']>,
  merkleRoot?: Maybe<Scalars['String']>,
  nonce?: Maybe<Scalars['Int']>,
  previousBlockHash?: Maybe<Scalars['String']>,
};

export type Bloxx_Block_Stddev_Fields = {
   __typename?: 'bloxx_block_stddev_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  nonce?: Maybe<Scalars['Float']>,
};

export type Bloxx_Block_Stddev_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

export type Bloxx_Block_Stddev_Pop_Fields = {
   __typename?: 'bloxx_block_stddev_pop_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  nonce?: Maybe<Scalars['Float']>,
};

export type Bloxx_Block_Stddev_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

export type Bloxx_Block_Stddev_Samp_Fields = {
   __typename?: 'bloxx_block_stddev_samp_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  nonce?: Maybe<Scalars['Float']>,
};

export type Bloxx_Block_Stddev_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

export type Bloxx_Block_Sum_Fields = {
   __typename?: 'bloxx_block_sum_fields',
  blockNumber?: Maybe<Scalars['Int']>,
  difficulty?: Maybe<Scalars['Int']>,
  nonce?: Maybe<Scalars['Int']>,
};

export type Bloxx_Block_Sum_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

export type Bloxx_Block_Transaction = {
   __typename?: 'bloxx_block_transaction',
  block: Bloxx_Block,
  blockHash: Scalars['String'],
  transaction: Bloxx_Transaction,
  txHash: Scalars['String'],
};

export type Bloxx_Block_Transaction_Aggregate = {
   __typename?: 'bloxx_block_transaction_aggregate',
  aggregate?: Maybe<Bloxx_Block_Transaction_Aggregate_Fields>,
  nodes: Array<Bloxx_Block_Transaction>,
};

export type Bloxx_Block_Transaction_Aggregate_Fields = {
   __typename?: 'bloxx_block_transaction_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Bloxx_Block_Transaction_Max_Fields>,
  min?: Maybe<Bloxx_Block_Transaction_Min_Fields>,
};


export type Bloxx_Block_Transaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bloxx_Block_Transaction_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Bloxx_Block_Transaction_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Bloxx_Block_Transaction_Max_Order_By>,
  min?: Maybe<Bloxx_Block_Transaction_Min_Order_By>,
};

export type Bloxx_Block_Transaction_Arr_Rel_Insert_Input = {
  data: Array<Bloxx_Block_Transaction_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Block_Transaction_On_Conflict>,
};

export type Bloxx_Block_Transaction_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bloxx_Block_Transaction_Bool_Exp>>>,
  _not?: Maybe<Bloxx_Block_Transaction_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Bloxx_Block_Transaction_Bool_Exp>>>,
  block?: Maybe<Bloxx_Block_Bool_Exp>,
  blockHash?: Maybe<String_Comparison_Exp>,
  transaction?: Maybe<Bloxx_Transaction_Bool_Exp>,
  txHash?: Maybe<String_Comparison_Exp>,
};

export enum Bloxx_Block_Transaction_Constraint {
  BlockTransactionPkey = 'block_transaction_pkey'
}

export type Bloxx_Block_Transaction_Insert_Input = {
  block?: Maybe<Bloxx_Block_Obj_Rel_Insert_Input>,
  blockHash?: Maybe<Scalars['String']>,
  transaction?: Maybe<Bloxx_Transaction_Obj_Rel_Insert_Input>,
  txHash?: Maybe<Scalars['String']>,
};

export type Bloxx_Block_Transaction_Max_Fields = {
   __typename?: 'bloxx_block_transaction_max_fields',
  blockHash?: Maybe<Scalars['String']>,
  txHash?: Maybe<Scalars['String']>,
};

export type Bloxx_Block_Transaction_Max_Order_By = {
  blockHash?: Maybe<Order_By>,
  txHash?: Maybe<Order_By>,
};

export type Bloxx_Block_Transaction_Min_Fields = {
   __typename?: 'bloxx_block_transaction_min_fields',
  blockHash?: Maybe<Scalars['String']>,
  txHash?: Maybe<Scalars['String']>,
};

export type Bloxx_Block_Transaction_Min_Order_By = {
  blockHash?: Maybe<Order_By>,
  txHash?: Maybe<Order_By>,
};

export type Bloxx_Block_Transaction_Mutation_Response = {
   __typename?: 'bloxx_block_transaction_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Bloxx_Block_Transaction>,
};

export type Bloxx_Block_Transaction_Obj_Rel_Insert_Input = {
  data: Bloxx_Block_Transaction_Insert_Input,
  on_conflict?: Maybe<Bloxx_Block_Transaction_On_Conflict>,
};

export type Bloxx_Block_Transaction_On_Conflict = {
  constraint: Bloxx_Block_Transaction_Constraint,
  update_columns: Array<Bloxx_Block_Transaction_Update_Column>,
  where?: Maybe<Bloxx_Block_Transaction_Bool_Exp>,
};

export type Bloxx_Block_Transaction_Order_By = {
  block?: Maybe<Bloxx_Block_Order_By>,
  blockHash?: Maybe<Order_By>,
  transaction?: Maybe<Bloxx_Transaction_Order_By>,
  txHash?: Maybe<Order_By>,
};

export enum Bloxx_Block_Transaction_Select_Column {
  BlockHash = 'blockHash',
  TxHash = 'txHash'
}

export type Bloxx_Block_Transaction_Set_Input = {
  blockHash?: Maybe<Scalars['String']>,
  txHash?: Maybe<Scalars['String']>,
};

export enum Bloxx_Block_Transaction_Update_Column {
  BlockHash = 'blockHash',
  TxHash = 'txHash'
}

export enum Bloxx_Block_Update_Column {
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  BlockStatus = 'blockStatus',
  CreatedAt = 'createdAt',
  Difficulty = 'difficulty',
  MerkleRoot = 'merkleRoot',
  Nonce = 'nonce',
  PreviousBlockHash = 'previousBlockHash'
}

export type Bloxx_Block_Var_Pop_Fields = {
   __typename?: 'bloxx_block_var_pop_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  nonce?: Maybe<Scalars['Float']>,
};

export type Bloxx_Block_Var_Pop_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

export type Bloxx_Block_Var_Samp_Fields = {
   __typename?: 'bloxx_block_var_samp_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  nonce?: Maybe<Scalars['Float']>,
};

export type Bloxx_Block_Var_Samp_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

export type Bloxx_Block_Variance_Fields = {
   __typename?: 'bloxx_block_variance_fields',
  blockNumber?: Maybe<Scalars['Float']>,
  difficulty?: Maybe<Scalars['Float']>,
  nonce?: Maybe<Scalars['Float']>,
};

export type Bloxx_Block_Variance_Order_By = {
  blockNumber?: Maybe<Order_By>,
  difficulty?: Maybe<Order_By>,
  nonce?: Maybe<Order_By>,
};

export type Bloxx_Node = {
   __typename?: 'bloxx_node',
  addresses: Array<Bloxx_Address>,
  addresses_aggregate: Bloxx_Address_Aggregate,
  privateKey: Scalars['String'],
  publicKey: Scalars['String'],
};


export type Bloxx_NodeAddressesArgs = {
  distinct_on?: Maybe<Array<Bloxx_Address_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Address_Order_By>>,
  where?: Maybe<Bloxx_Address_Bool_Exp>
};


export type Bloxx_NodeAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Address_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Address_Order_By>>,
  where?: Maybe<Bloxx_Address_Bool_Exp>
};

export type Bloxx_Node_Aggregate = {
   __typename?: 'bloxx_node_aggregate',
  aggregate?: Maybe<Bloxx_Node_Aggregate_Fields>,
  nodes: Array<Bloxx_Node>,
};

export type Bloxx_Node_Aggregate_Fields = {
   __typename?: 'bloxx_node_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Bloxx_Node_Max_Fields>,
  min?: Maybe<Bloxx_Node_Min_Fields>,
};


export type Bloxx_Node_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bloxx_Node_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Bloxx_Node_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Bloxx_Node_Max_Order_By>,
  min?: Maybe<Bloxx_Node_Min_Order_By>,
};

export type Bloxx_Node_Arr_Rel_Insert_Input = {
  data: Array<Bloxx_Node_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Node_On_Conflict>,
};

export type Bloxx_Node_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bloxx_Node_Bool_Exp>>>,
  _not?: Maybe<Bloxx_Node_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Bloxx_Node_Bool_Exp>>>,
  addresses?: Maybe<Bloxx_Address_Bool_Exp>,
  privateKey?: Maybe<String_Comparison_Exp>,
  publicKey?: Maybe<String_Comparison_Exp>,
};

export enum Bloxx_Node_Constraint {
  NodeNodeprkKey = 'node_nodeprk_key',
  NodeNodepukKey = 'node_nodepuk_key',
  NodePkey = 'node_pkey'
}

export type Bloxx_Node_Insert_Input = {
  addresses?: Maybe<Bloxx_Address_Arr_Rel_Insert_Input>,
  privateKey?: Maybe<Scalars['String']>,
  publicKey?: Maybe<Scalars['String']>,
};

export type Bloxx_Node_Max_Fields = {
   __typename?: 'bloxx_node_max_fields',
  privateKey?: Maybe<Scalars['String']>,
  publicKey?: Maybe<Scalars['String']>,
};

export type Bloxx_Node_Max_Order_By = {
  privateKey?: Maybe<Order_By>,
  publicKey?: Maybe<Order_By>,
};

export type Bloxx_Node_Min_Fields = {
   __typename?: 'bloxx_node_min_fields',
  privateKey?: Maybe<Scalars['String']>,
  publicKey?: Maybe<Scalars['String']>,
};

export type Bloxx_Node_Min_Order_By = {
  privateKey?: Maybe<Order_By>,
  publicKey?: Maybe<Order_By>,
};

export type Bloxx_Node_Mutation_Response = {
   __typename?: 'bloxx_node_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Bloxx_Node>,
};

export type Bloxx_Node_Obj_Rel_Insert_Input = {
  data: Bloxx_Node_Insert_Input,
  on_conflict?: Maybe<Bloxx_Node_On_Conflict>,
};

export type Bloxx_Node_On_Conflict = {
  constraint: Bloxx_Node_Constraint,
  update_columns: Array<Bloxx_Node_Update_Column>,
  where?: Maybe<Bloxx_Node_Bool_Exp>,
};

export type Bloxx_Node_Order_By = {
  addresses_aggregate?: Maybe<Bloxx_Address_Aggregate_Order_By>,
  privateKey?: Maybe<Order_By>,
  publicKey?: Maybe<Order_By>,
};

export enum Bloxx_Node_Select_Column {
  PrivateKey = 'privateKey',
  PublicKey = 'publicKey'
}

export type Bloxx_Node_Set_Input = {
  privateKey?: Maybe<Scalars['String']>,
  publicKey?: Maybe<Scalars['String']>,
};

export enum Bloxx_Node_Update_Column {
  PrivateKey = 'privateKey',
  PublicKey = 'publicKey'
}

export type Bloxx_Transaction = {
   __typename?: 'bloxx_transaction',
  address: Bloxx_Address,
  addressByInputaddress?: Maybe<Bloxx_Address>,
  block?: Maybe<Bloxx_Block>,
  blockHash?: Maybe<Scalars['String']>,
  block_transactions: Array<Bloxx_Block_Transaction>,
  block_transactions_aggregate: Bloxx_Block_Transaction_Aggregate,
  inputAddress?: Maybe<Scalars['String']>,
  outputAddress: Scalars['String'],
  signature: Scalars['String'],
  text?: Maybe<Scalars['String']>,
  txHash: Scalars['String'],
  value: Scalars['Int'],
};


export type Bloxx_TransactionBlock_TransactionsArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Block_Transaction_Bool_Exp>
};


export type Bloxx_TransactionBlock_Transactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Block_Transaction_Bool_Exp>
};

export type Bloxx_Transaction_Aggregate = {
   __typename?: 'bloxx_transaction_aggregate',
  aggregate?: Maybe<Bloxx_Transaction_Aggregate_Fields>,
  nodes: Array<Bloxx_Transaction>,
};

export type Bloxx_Transaction_Aggregate_Fields = {
   __typename?: 'bloxx_transaction_aggregate_fields',
  avg?: Maybe<Bloxx_Transaction_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Bloxx_Transaction_Max_Fields>,
  min?: Maybe<Bloxx_Transaction_Min_Fields>,
  stddev?: Maybe<Bloxx_Transaction_Stddev_Fields>,
  stddev_pop?: Maybe<Bloxx_Transaction_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Bloxx_Transaction_Stddev_Samp_Fields>,
  sum?: Maybe<Bloxx_Transaction_Sum_Fields>,
  var_pop?: Maybe<Bloxx_Transaction_Var_Pop_Fields>,
  var_samp?: Maybe<Bloxx_Transaction_Var_Samp_Fields>,
  variance?: Maybe<Bloxx_Transaction_Variance_Fields>,
};


export type Bloxx_Transaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

export type Bloxx_Transaction_Aggregate_Order_By = {
  avg?: Maybe<Bloxx_Transaction_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Bloxx_Transaction_Max_Order_By>,
  min?: Maybe<Bloxx_Transaction_Min_Order_By>,
  stddev?: Maybe<Bloxx_Transaction_Stddev_Order_By>,
  stddev_pop?: Maybe<Bloxx_Transaction_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Bloxx_Transaction_Stddev_Samp_Order_By>,
  sum?: Maybe<Bloxx_Transaction_Sum_Order_By>,
  var_pop?: Maybe<Bloxx_Transaction_Var_Pop_Order_By>,
  var_samp?: Maybe<Bloxx_Transaction_Var_Samp_Order_By>,
  variance?: Maybe<Bloxx_Transaction_Variance_Order_By>,
};

export type Bloxx_Transaction_Arr_Rel_Insert_Input = {
  data: Array<Bloxx_Transaction_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Transaction_On_Conflict>,
};

export type Bloxx_Transaction_Avg_Fields = {
   __typename?: 'bloxx_transaction_avg_fields',
  value?: Maybe<Scalars['Float']>,
};

export type Bloxx_Transaction_Avg_Order_By = {
  value?: Maybe<Order_By>,
};

export type Bloxx_Transaction_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bloxx_Transaction_Bool_Exp>>>,
  _not?: Maybe<Bloxx_Transaction_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Bloxx_Transaction_Bool_Exp>>>,
  address?: Maybe<Bloxx_Address_Bool_Exp>,
  addressByInputaddress?: Maybe<Bloxx_Address_Bool_Exp>,
  block?: Maybe<Bloxx_Block_Bool_Exp>,
  blockHash?: Maybe<String_Comparison_Exp>,
  block_transactions?: Maybe<Bloxx_Block_Transaction_Bool_Exp>,
  inputAddress?: Maybe<String_Comparison_Exp>,
  outputAddress?: Maybe<String_Comparison_Exp>,
  signature?: Maybe<String_Comparison_Exp>,
  text?: Maybe<String_Comparison_Exp>,
  txHash?: Maybe<String_Comparison_Exp>,
  value?: Maybe<Int_Comparison_Exp>,
};

export enum Bloxx_Transaction_Constraint {
  TransactionPkey = 'transaction_pkey',
  TransactionTxhashKey = 'transaction_txhash_key'
}

export type Bloxx_Transaction_Inc_Input = {
  value?: Maybe<Scalars['Int']>,
};

export type Bloxx_Transaction_Insert_Input = {
  address?: Maybe<Bloxx_Address_Obj_Rel_Insert_Input>,
  addressByInputaddress?: Maybe<Bloxx_Address_Obj_Rel_Insert_Input>,
  block?: Maybe<Bloxx_Block_Obj_Rel_Insert_Input>,
  blockHash?: Maybe<Scalars['String']>,
  block_transactions?: Maybe<Bloxx_Block_Transaction_Arr_Rel_Insert_Input>,
  inputAddress?: Maybe<Scalars['String']>,
  outputAddress?: Maybe<Scalars['String']>,
  signature?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  txHash?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
};

export type Bloxx_Transaction_Max_Fields = {
   __typename?: 'bloxx_transaction_max_fields',
  blockHash?: Maybe<Scalars['String']>,
  inputAddress?: Maybe<Scalars['String']>,
  outputAddress?: Maybe<Scalars['String']>,
  signature?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  txHash?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
};

export type Bloxx_Transaction_Max_Order_By = {
  blockHash?: Maybe<Order_By>,
  inputAddress?: Maybe<Order_By>,
  outputAddress?: Maybe<Order_By>,
  signature?: Maybe<Order_By>,
  text?: Maybe<Order_By>,
  txHash?: Maybe<Order_By>,
  value?: Maybe<Order_By>,
};

export type Bloxx_Transaction_Min_Fields = {
   __typename?: 'bloxx_transaction_min_fields',
  blockHash?: Maybe<Scalars['String']>,
  inputAddress?: Maybe<Scalars['String']>,
  outputAddress?: Maybe<Scalars['String']>,
  signature?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  txHash?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
};

export type Bloxx_Transaction_Min_Order_By = {
  blockHash?: Maybe<Order_By>,
  inputAddress?: Maybe<Order_By>,
  outputAddress?: Maybe<Order_By>,
  signature?: Maybe<Order_By>,
  text?: Maybe<Order_By>,
  txHash?: Maybe<Order_By>,
  value?: Maybe<Order_By>,
};

export type Bloxx_Transaction_Mutation_Response = {
   __typename?: 'bloxx_transaction_mutation_response',
  affected_rows: Scalars['Int'],
  returning: Array<Bloxx_Transaction>,
};

export type Bloxx_Transaction_Obj_Rel_Insert_Input = {
  data: Bloxx_Transaction_Insert_Input,
  on_conflict?: Maybe<Bloxx_Transaction_On_Conflict>,
};

export type Bloxx_Transaction_On_Conflict = {
  constraint: Bloxx_Transaction_Constraint,
  update_columns: Array<Bloxx_Transaction_Update_Column>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>,
};

export type Bloxx_Transaction_Order_By = {
  address?: Maybe<Bloxx_Address_Order_By>,
  addressByInputaddress?: Maybe<Bloxx_Address_Order_By>,
  block?: Maybe<Bloxx_Block_Order_By>,
  blockHash?: Maybe<Order_By>,
  block_transactions_aggregate?: Maybe<Bloxx_Block_Transaction_Aggregate_Order_By>,
  inputAddress?: Maybe<Order_By>,
  outputAddress?: Maybe<Order_By>,
  signature?: Maybe<Order_By>,
  text?: Maybe<Order_By>,
  txHash?: Maybe<Order_By>,
  value?: Maybe<Order_By>,
};

export enum Bloxx_Transaction_Select_Column {
  BlockHash = 'blockHash',
  InputAddress = 'inputAddress',
  OutputAddress = 'outputAddress',
  Signature = 'signature',
  Text = 'text',
  TxHash = 'txHash',
  Value = 'value'
}

export type Bloxx_Transaction_Set_Input = {
  blockHash?: Maybe<Scalars['String']>,
  inputAddress?: Maybe<Scalars['String']>,
  outputAddress?: Maybe<Scalars['String']>,
  signature?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  txHash?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
};

export type Bloxx_Transaction_Stddev_Fields = {
   __typename?: 'bloxx_transaction_stddev_fields',
  value?: Maybe<Scalars['Float']>,
};

export type Bloxx_Transaction_Stddev_Order_By = {
  value?: Maybe<Order_By>,
};

export type Bloxx_Transaction_Stddev_Pop_Fields = {
   __typename?: 'bloxx_transaction_stddev_pop_fields',
  value?: Maybe<Scalars['Float']>,
};

export type Bloxx_Transaction_Stddev_Pop_Order_By = {
  value?: Maybe<Order_By>,
};

export type Bloxx_Transaction_Stddev_Samp_Fields = {
   __typename?: 'bloxx_transaction_stddev_samp_fields',
  value?: Maybe<Scalars['Float']>,
};

export type Bloxx_Transaction_Stddev_Samp_Order_By = {
  value?: Maybe<Order_By>,
};

export type Bloxx_Transaction_Sum_Fields = {
   __typename?: 'bloxx_transaction_sum_fields',
  value?: Maybe<Scalars['Int']>,
};

export type Bloxx_Transaction_Sum_Order_By = {
  value?: Maybe<Order_By>,
};

export enum Bloxx_Transaction_Update_Column {
  BlockHash = 'blockHash',
  InputAddress = 'inputAddress',
  OutputAddress = 'outputAddress',
  Signature = 'signature',
  Text = 'text',
  TxHash = 'txHash',
  Value = 'value'
}

export type Bloxx_Transaction_Var_Pop_Fields = {
   __typename?: 'bloxx_transaction_var_pop_fields',
  value?: Maybe<Scalars['Float']>,
};

export type Bloxx_Transaction_Var_Pop_Order_By = {
  value?: Maybe<Order_By>,
};

export type Bloxx_Transaction_Var_Samp_Fields = {
   __typename?: 'bloxx_transaction_var_samp_fields',
  value?: Maybe<Scalars['Float']>,
};

export type Bloxx_Transaction_Var_Samp_Order_By = {
  value?: Maybe<Order_By>,
};

export type Bloxx_Transaction_Variance_Fields = {
   __typename?: 'bloxx_transaction_variance_fields',
  value?: Maybe<Scalars['Float']>,
};

export type Bloxx_Transaction_Variance_Order_By = {
  value?: Maybe<Order_By>,
};

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Scalars['Int']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Scalars['Int']>>,
};

export type Mutation_Root = {
   __typename?: 'mutation_root',
  delete_bloxx_address?: Maybe<Bloxx_Address_Mutation_Response>,
  delete_bloxx_block?: Maybe<Bloxx_Block_Mutation_Response>,
  delete_bloxx_block_transaction?: Maybe<Bloxx_Block_Transaction_Mutation_Response>,
  delete_bloxx_node?: Maybe<Bloxx_Node_Mutation_Response>,
  delete_bloxx_transaction?: Maybe<Bloxx_Transaction_Mutation_Response>,
  insert_bloxx_address?: Maybe<Bloxx_Address_Mutation_Response>,
  insert_bloxx_block?: Maybe<Bloxx_Block_Mutation_Response>,
  insert_bloxx_block_transaction?: Maybe<Bloxx_Block_Transaction_Mutation_Response>,
  insert_bloxx_node?: Maybe<Bloxx_Node_Mutation_Response>,
  insert_bloxx_transaction?: Maybe<Bloxx_Transaction_Mutation_Response>,
  update_bloxx_address?: Maybe<Bloxx_Address_Mutation_Response>,
  update_bloxx_block?: Maybe<Bloxx_Block_Mutation_Response>,
  update_bloxx_block_transaction?: Maybe<Bloxx_Block_Transaction_Mutation_Response>,
  update_bloxx_node?: Maybe<Bloxx_Node_Mutation_Response>,
  update_bloxx_transaction?: Maybe<Bloxx_Transaction_Mutation_Response>,
};


export type Mutation_RootDelete_Bloxx_AddressArgs = {
  where: Bloxx_Address_Bool_Exp
};


export type Mutation_RootDelete_Bloxx_BlockArgs = {
  where: Bloxx_Block_Bool_Exp
};


export type Mutation_RootDelete_Bloxx_Block_TransactionArgs = {
  where: Bloxx_Block_Transaction_Bool_Exp
};


export type Mutation_RootDelete_Bloxx_NodeArgs = {
  where: Bloxx_Node_Bool_Exp
};


export type Mutation_RootDelete_Bloxx_TransactionArgs = {
  where: Bloxx_Transaction_Bool_Exp
};


export type Mutation_RootInsert_Bloxx_AddressArgs = {
  objects: Array<Bloxx_Address_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Address_On_Conflict>
};


export type Mutation_RootInsert_Bloxx_BlockArgs = {
  objects: Array<Bloxx_Block_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Block_On_Conflict>
};


export type Mutation_RootInsert_Bloxx_Block_TransactionArgs = {
  objects: Array<Bloxx_Block_Transaction_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Block_Transaction_On_Conflict>
};


export type Mutation_RootInsert_Bloxx_NodeArgs = {
  objects: Array<Bloxx_Node_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Node_On_Conflict>
};


export type Mutation_RootInsert_Bloxx_TransactionArgs = {
  objects: Array<Bloxx_Transaction_Insert_Input>,
  on_conflict?: Maybe<Bloxx_Transaction_On_Conflict>
};


export type Mutation_RootUpdate_Bloxx_AddressArgs = {
  _inc?: Maybe<Bloxx_Address_Inc_Input>,
  _set?: Maybe<Bloxx_Address_Set_Input>,
  where: Bloxx_Address_Bool_Exp
};


export type Mutation_RootUpdate_Bloxx_BlockArgs = {
  _inc?: Maybe<Bloxx_Block_Inc_Input>,
  _set?: Maybe<Bloxx_Block_Set_Input>,
  where: Bloxx_Block_Bool_Exp
};


export type Mutation_RootUpdate_Bloxx_Block_TransactionArgs = {
  _set?: Maybe<Bloxx_Block_Transaction_Set_Input>,
  where: Bloxx_Block_Transaction_Bool_Exp
};


export type Mutation_RootUpdate_Bloxx_NodeArgs = {
  _set?: Maybe<Bloxx_Node_Set_Input>,
  where: Bloxx_Node_Bool_Exp
};


export type Mutation_RootUpdate_Bloxx_TransactionArgs = {
  _inc?: Maybe<Bloxx_Transaction_Inc_Input>,
  _set?: Maybe<Bloxx_Transaction_Set_Input>,
  where: Bloxx_Transaction_Bool_Exp
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
   __typename?: 'query_root',
  bloxx_address: Array<Bloxx_Address>,
  bloxx_address_aggregate: Bloxx_Address_Aggregate,
  bloxx_address_by_pk?: Maybe<Bloxx_Address>,
  bloxx_block: Array<Bloxx_Block>,
  bloxx_block_aggregate: Bloxx_Block_Aggregate,
  bloxx_block_by_pk?: Maybe<Bloxx_Block>,
  bloxx_block_transaction: Array<Bloxx_Block_Transaction>,
  bloxx_block_transaction_aggregate: Bloxx_Block_Transaction_Aggregate,
  bloxx_block_transaction_by_pk?: Maybe<Bloxx_Block_Transaction>,
  bloxx_node: Array<Bloxx_Node>,
  bloxx_node_aggregate: Bloxx_Node_Aggregate,
  bloxx_node_by_pk?: Maybe<Bloxx_Node>,
  bloxx_transaction: Array<Bloxx_Transaction>,
  bloxx_transaction_aggregate: Bloxx_Transaction_Aggregate,
  bloxx_transaction_by_pk?: Maybe<Bloxx_Transaction>,
};


export type Query_RootBloxx_AddressArgs = {
  distinct_on?: Maybe<Array<Bloxx_Address_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Address_Order_By>>,
  where?: Maybe<Bloxx_Address_Bool_Exp>
};


export type Query_RootBloxx_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Address_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Address_Order_By>>,
  where?: Maybe<Bloxx_Address_Bool_Exp>
};


export type Query_RootBloxx_Address_By_PkArgs = {
  id: Scalars['String']
};


export type Query_RootBloxx_BlockArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Order_By>>,
  where?: Maybe<Bloxx_Block_Bool_Exp>
};


export type Query_RootBloxx_Block_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Order_By>>,
  where?: Maybe<Bloxx_Block_Bool_Exp>
};


export type Query_RootBloxx_Block_By_PkArgs = {
  blockHash: Scalars['String']
};


export type Query_RootBloxx_Block_TransactionArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Block_Transaction_Bool_Exp>
};


export type Query_RootBloxx_Block_Transaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Block_Transaction_Bool_Exp>
};


export type Query_RootBloxx_Block_Transaction_By_PkArgs = {
  blockHash: Scalars['String'],
  txHash: Scalars['String']
};


export type Query_RootBloxx_NodeArgs = {
  distinct_on?: Maybe<Array<Bloxx_Node_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Node_Order_By>>,
  where?: Maybe<Bloxx_Node_Bool_Exp>
};


export type Query_RootBloxx_Node_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Node_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Node_Order_By>>,
  where?: Maybe<Bloxx_Node_Bool_Exp>
};


export type Query_RootBloxx_Node_By_PkArgs = {
  publicKey: Scalars['String']
};


export type Query_RootBloxx_TransactionArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


export type Query_RootBloxx_Transaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


export type Query_RootBloxx_Transaction_By_PkArgs = {
  txHash: Scalars['String']
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

export type Subscription_Root = {
   __typename?: 'subscription_root',
  bloxx_address: Array<Bloxx_Address>,
  bloxx_address_aggregate: Bloxx_Address_Aggregate,
  bloxx_address_by_pk?: Maybe<Bloxx_Address>,
  bloxx_block: Array<Bloxx_Block>,
  bloxx_block_aggregate: Bloxx_Block_Aggregate,
  bloxx_block_by_pk?: Maybe<Bloxx_Block>,
  bloxx_block_transaction: Array<Bloxx_Block_Transaction>,
  bloxx_block_transaction_aggregate: Bloxx_Block_Transaction_Aggregate,
  bloxx_block_transaction_by_pk?: Maybe<Bloxx_Block_Transaction>,
  bloxx_node: Array<Bloxx_Node>,
  bloxx_node_aggregate: Bloxx_Node_Aggregate,
  bloxx_node_by_pk?: Maybe<Bloxx_Node>,
  bloxx_transaction: Array<Bloxx_Transaction>,
  bloxx_transaction_aggregate: Bloxx_Transaction_Aggregate,
  bloxx_transaction_by_pk?: Maybe<Bloxx_Transaction>,
};


export type Subscription_RootBloxx_AddressArgs = {
  distinct_on?: Maybe<Array<Bloxx_Address_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Address_Order_By>>,
  where?: Maybe<Bloxx_Address_Bool_Exp>
};


export type Subscription_RootBloxx_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Address_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Address_Order_By>>,
  where?: Maybe<Bloxx_Address_Bool_Exp>
};


export type Subscription_RootBloxx_Address_By_PkArgs = {
  id: Scalars['String']
};


export type Subscription_RootBloxx_BlockArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Order_By>>,
  where?: Maybe<Bloxx_Block_Bool_Exp>
};


export type Subscription_RootBloxx_Block_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Order_By>>,
  where?: Maybe<Bloxx_Block_Bool_Exp>
};


export type Subscription_RootBloxx_Block_By_PkArgs = {
  blockHash: Scalars['String']
};


export type Subscription_RootBloxx_Block_TransactionArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Block_Transaction_Bool_Exp>
};


export type Subscription_RootBloxx_Block_Transaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Block_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Block_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Block_Transaction_Bool_Exp>
};


export type Subscription_RootBloxx_Block_Transaction_By_PkArgs = {
  blockHash: Scalars['String'],
  txHash: Scalars['String']
};


export type Subscription_RootBloxx_NodeArgs = {
  distinct_on?: Maybe<Array<Bloxx_Node_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Node_Order_By>>,
  where?: Maybe<Bloxx_Node_Bool_Exp>
};


export type Subscription_RootBloxx_Node_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Node_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Node_Order_By>>,
  where?: Maybe<Bloxx_Node_Bool_Exp>
};


export type Subscription_RootBloxx_Node_By_PkArgs = {
  publicKey: Scalars['String']
};


export type Subscription_RootBloxx_TransactionArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


export type Subscription_RootBloxx_Transaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Bloxx_Transaction_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Bloxx_Transaction_Order_By>>,
  where?: Maybe<Bloxx_Transaction_Bool_Exp>
};


export type Subscription_RootBloxx_Transaction_By_PkArgs = {
  txHash: Scalars['String']
};


export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>,
  _gt?: Maybe<Scalars['timestamp']>,
  _gte?: Maybe<Scalars['timestamp']>,
  _in?: Maybe<Array<Scalars['timestamp']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamp']>,
  _lte?: Maybe<Scalars['timestamp']>,
  _neq?: Maybe<Scalars['timestamp']>,
  _nin?: Maybe<Array<Scalars['timestamp']>>,
};

export type InsertAdminTransactionsMutationVariables = {
  transactions: Array<Bloxx_Transaction_Insert_Input>
};


export type InsertAdminTransactionsMutation = (
  { __typename?: 'mutation_root' }
  & { insert_bloxx_transaction: Maybe<(
    { __typename?: 'bloxx_transaction_mutation_response' }
    & Pick<Bloxx_Transaction_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'bloxx_transaction' }
      & Pick<Bloxx_Transaction, 'blockHash' | 'inputAddress' | 'outputAddress' | 'signature' | 'text' | 'txHash' | 'value'>
    )> }
  )> }
);

export type InsertBlockMutationVariables = {
  blockNumber?: Maybe<Scalars['Int']>,
  previousBlockHash?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['timestamp']>,
  difficulty?: Maybe<Scalars['Int']>,
  merkleRoot?: Maybe<Scalars['String']>,
  nonce?: Maybe<Scalars['Int']>,
  blockHash?: Maybe<Scalars['String']>,
  blockStatus?: Maybe<Scalars['String']>,
  block_transactions?: Maybe<Bloxx_Block_Transaction_Arr_Rel_Insert_Input>
};


export type InsertBlockMutation = (
  { __typename?: 'mutation_root' }
  & { insert_bloxx_block: Maybe<(
    { __typename?: 'bloxx_block_mutation_response' }
    & Pick<Bloxx_Block_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'bloxx_block' }
      & Pick<Bloxx_Block, 'blockHash' | 'blockNumber' | 'blockStatus' | 'createdAt' | 'difficulty' | 'merkleRoot' | 'nonce' | 'previousBlockHash'>
    )> }
  )> }
);

export type InsertNodeMutationVariables = {
  publicKey?: Maybe<Scalars['String']>,
  privateKey?: Maybe<Scalars['String']>,
  address?: Maybe<Scalars['String']>,
  balance?: Maybe<Scalars['Int']>
};


export type InsertNodeMutation = (
  { __typename?: 'mutation_root' }
  & { insert_bloxx_node: Maybe<(
    { __typename?: 'bloxx_node_mutation_response' }
    & Pick<Bloxx_Node_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'bloxx_node' }
      & Pick<Bloxx_Node, 'publicKey' | 'privateKey'>
      & { addresses: Array<(
        { __typename?: 'bloxx_address' }
        & Pick<Bloxx_Address, 'id' | 'balance'>
      )> }
    )> }
  )> }
);

export type InsertTransactionMutationVariables = {
  inputAddress?: Maybe<Scalars['String']>,
  outputAddress?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Int']>,
  signature?: Maybe<Scalars['String']>,
  txHash?: Maybe<Scalars['String']>
};


export type InsertTransactionMutation = (
  { __typename?: 'mutation_root' }
  & { insert_bloxx_transaction: Maybe<(
    { __typename?: 'bloxx_transaction_mutation_response' }
    & Pick<Bloxx_Transaction_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'bloxx_transaction' }
      & Pick<Bloxx_Transaction, 'inputAddress' | 'outputAddress' | 'signature' | 'txHash' | 'value'>
    )> }
  )> }
);

export type DeleteGameDataMutationVariables = {};


export type DeleteGameDataMutation = (
  { __typename?: 'mutation_root' }
  & { delete_bloxx_transaction: Maybe<(
    { __typename?: 'bloxx_transaction_mutation_response' }
    & Pick<Bloxx_Transaction_Mutation_Response, 'affected_rows'>
  )>, delete_bloxx_address: Maybe<(
    { __typename?: 'bloxx_address_mutation_response' }
    & Pick<Bloxx_Address_Mutation_Response, 'affected_rows'>
  )>, delete_bloxx_node: Maybe<(
    { __typename?: 'bloxx_node_mutation_response' }
    & Pick<Bloxx_Node_Mutation_Response, 'affected_rows'>
  )>, delete_bloxx_block: Maybe<(
    { __typename?: 'bloxx_block_mutation_response' }
    & Pick<Bloxx_Block_Mutation_Response, 'affected_rows'>
  )>, delete_bloxx_block_transaction: Maybe<(
    { __typename?: 'bloxx_block_transaction_mutation_response' }
    & Pick<Bloxx_Block_Transaction_Mutation_Response, 'affected_rows'>
  )> }
);

export type AdminAddressQueryVariables = {};


export type AdminAddressQuery = (
  { __typename?: 'query_root' }
  & { bloxx_address: Array<(
    { __typename?: 'bloxx_address' }
    & Pick<Bloxx_Address, 'nodePublicKey'>
  )> }
);

export type BlockQueryVariables = {
  blockHash?: Maybe<Scalars['String']>
};


export type BlockQuery = (
  { __typename?: 'query_root' }
  & { bloxx_block: Array<(
    { __typename?: 'bloxx_block' }
    & Pick<Bloxx_Block, 'blockNumber' | 'previousBlockHash' | 'merkleRoot' | 'difficulty' | 'createdAt' | 'nonce' | 'blockHash'>
    & { block_transactions: Array<(
      { __typename?: 'bloxx_block_transaction' }
      & { transaction: (
        { __typename?: 'bloxx_transaction' }
        & Pick<Bloxx_Transaction, 'inputAddress' | 'outputAddress' | 'signature' | 'value' | 'txHash'>
        & { addressByInputaddress: Maybe<(
          { __typename?: 'bloxx_address' }
          & Pick<Bloxx_Address, 'nodePublicKey'>
        )> }
      ) }
    )> }
  )> }
);

export type BlockHashByBlocknumberQueryVariables = {
  blockNumber?: Maybe<Scalars['Int']>
};


export type BlockHashByBlocknumberQuery = (
  { __typename?: 'query_root' }
  & { bloxx_block: Array<(
    { __typename?: 'bloxx_block' }
    & Pick<Bloxx_Block, 'blockHash'>
  )> }
);

export type AddressSubscriptionVariables = {};


export type AddressSubscription = (
  { __typename?: 'subscription_root' }
  & { bloxx_address: Array<(
    { __typename?: 'bloxx_address' }
    & Pick<Bloxx_Address, 'balance' | 'id'>
  )> }
);

export type OnBlockAddedSubscriptionVariables = {};


export type OnBlockAddedSubscription = (
  { __typename?: 'subscription_root' }
  & { bloxx_block: Array<(
    { __typename?: 'bloxx_block' }
    & Pick<Bloxx_Block, 'blockNumber' | 'blockHash' | 'previousBlockHash' | 'blockStatus'>
    & { block_transactions: Array<(
      { __typename?: 'bloxx_block_transaction' }
      & Pick<Bloxx_Block_Transaction, 'txHash'>
    )> }
  )> }
);

export type OnNewNodeAddedSubscriptionVariables = {};


export type OnNewNodeAddedSubscription = (
  { __typename?: 'subscription_root' }
  & { bloxx_node: Array<(
    { __typename?: 'bloxx_node' }
    & Pick<Bloxx_Node, 'publicKey'>
    & { addresses: Array<(
      { __typename?: 'bloxx_address' }
      & Pick<Bloxx_Address, 'id' | 'balance' | 'nodePublicKey'>
    )> }
  )> }
);

export type OnNewTransactionAddedSubscriptionVariables = {};


export type OnNewTransactionAddedSubscription = (
  { __typename?: 'subscription_root' }
  & { bloxx_transaction: Array<(
    { __typename?: 'bloxx_transaction' }
    & Pick<Bloxx_Transaction, 'inputAddress' | 'outputAddress' | 'signature' | 'txHash' | 'value'>
    & { addressByInputaddress: Maybe<(
      { __typename?: 'bloxx_address' }
      & Pick<Bloxx_Address, 'nodePublicKey'>
    )> }
  )> }
);


export const InsertAdminTransactionsDocument = gql`
    mutation insertAdminTransactions($transactions: [bloxx_transaction_insert_input!]!) {
  insert_bloxx_transaction(objects: $transactions) {
    returning {
      blockHash
      inputAddress
      outputAddress
      signature
      text
      txHash
      value
    }
    affected_rows
  }
}
    `;
export type InsertAdminTransactionsMutationFn = ApolloReactCommon.MutationFunction<InsertAdminTransactionsMutation, InsertAdminTransactionsMutationVariables>;

/**
 * __useInsertAdminTransactionsMutation__
 *
 * To run a mutation, you first call `useInsertAdminTransactionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertAdminTransactionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertAdminTransactionsMutation, { data, loading, error }] = useInsertAdminTransactionsMutation({
 *   variables: {
 *      transactions: // value for 'transactions'
 *   },
 * });
 */
export function useInsertAdminTransactionsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertAdminTransactionsMutation, InsertAdminTransactionsMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertAdminTransactionsMutation, InsertAdminTransactionsMutationVariables>(InsertAdminTransactionsDocument, baseOptions);
      }
export type InsertAdminTransactionsMutationHookResult = ReturnType<typeof useInsertAdminTransactionsMutation>;
export type InsertAdminTransactionsMutationResult = ApolloReactCommon.MutationResult<InsertAdminTransactionsMutation>;
export type InsertAdminTransactionsMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertAdminTransactionsMutation, InsertAdminTransactionsMutationVariables>;
export const InsertBlockDocument = gql`
    mutation insertBlock($blockNumber: Int, $previousBlockHash: String, $createdAt: timestamp, $difficulty: Int, $merkleRoot: String, $nonce: Int, $blockHash: String, $blockStatus: String, $block_transactions: bloxx_block_transaction_arr_rel_insert_input) {
  insert_bloxx_block(objects: {blockNumber: $blockNumber, previousBlockHash: $previousBlockHash, createdAt: $createdAt, difficulty: $difficulty, merkleRoot: $merkleRoot, nonce: $nonce, blockHash: $blockHash, blockStatus: $blockStatus, block_transactions: $block_transactions}, on_conflict: {constraint: block_blockHash_key, update_columns: blockNumber}) {
    affected_rows
    returning {
      blockHash
      blockNumber
      blockStatus
      createdAt
      difficulty
      merkleRoot
      nonce
      previousBlockHash
    }
  }
}
    `;
export type InsertBlockMutationFn = ApolloReactCommon.MutationFunction<InsertBlockMutation, InsertBlockMutationVariables>;

/**
 * __useInsertBlockMutation__
 *
 * To run a mutation, you first call `useInsertBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertBlockMutation, { data, loading, error }] = useInsertBlockMutation({
 *   variables: {
 *      blockNumber: // value for 'blockNumber'
 *      previousBlockHash: // value for 'previousBlockHash'
 *      createdAt: // value for 'createdAt'
 *      difficulty: // value for 'difficulty'
 *      merkleRoot: // value for 'merkleRoot'
 *      nonce: // value for 'nonce'
 *      blockHash: // value for 'blockHash'
 *      blockStatus: // value for 'blockStatus'
 *      block_transactions: // value for 'block_transactions'
 *   },
 * });
 */
export function useInsertBlockMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertBlockMutation, InsertBlockMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertBlockMutation, InsertBlockMutationVariables>(InsertBlockDocument, baseOptions);
      }
export type InsertBlockMutationHookResult = ReturnType<typeof useInsertBlockMutation>;
export type InsertBlockMutationResult = ApolloReactCommon.MutationResult<InsertBlockMutation>;
export type InsertBlockMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertBlockMutation, InsertBlockMutationVariables>;
export const InsertNodeDocument = gql`
    mutation insertNode($publicKey: String, $privateKey: String, $address: String, $balance: Int) {
  insert_bloxx_node(objects: {publicKey: $publicKey, privateKey: $privateKey, addresses: {data: {id: $address, balance: $balance}}}) {
    affected_rows
    returning {
      publicKey
      privateKey
      addresses {
        id
        balance
      }
    }
  }
}
    `;
export type InsertNodeMutationFn = ApolloReactCommon.MutationFunction<InsertNodeMutation, InsertNodeMutationVariables>;

/**
 * __useInsertNodeMutation__
 *
 * To run a mutation, you first call `useInsertNodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertNodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertNodeMutation, { data, loading, error }] = useInsertNodeMutation({
 *   variables: {
 *      publicKey: // value for 'publicKey'
 *      privateKey: // value for 'privateKey'
 *      address: // value for 'address'
 *      balance: // value for 'balance'
 *   },
 * });
 */
export function useInsertNodeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertNodeMutation, InsertNodeMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertNodeMutation, InsertNodeMutationVariables>(InsertNodeDocument, baseOptions);
      }
export type InsertNodeMutationHookResult = ReturnType<typeof useInsertNodeMutation>;
export type InsertNodeMutationResult = ApolloReactCommon.MutationResult<InsertNodeMutation>;
export type InsertNodeMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertNodeMutation, InsertNodeMutationVariables>;
export const InsertTransactionDocument = gql`
    mutation insertTransaction($inputAddress: String, $outputAddress: String, $value: Int, $signature: String, $txHash: String) {
  insert_bloxx_transaction(objects: {inputAddress: $inputAddress, outputAddress: $outputAddress, value: $value, signature: $signature, txHash: $txHash}) {
    affected_rows
    returning {
      inputAddress
      outputAddress
      signature
      txHash
      value
    }
  }
}
    `;
export type InsertTransactionMutationFn = ApolloReactCommon.MutationFunction<InsertTransactionMutation, InsertTransactionMutationVariables>;

/**
 * __useInsertTransactionMutation__
 *
 * To run a mutation, you first call `useInsertTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTransactionMutation, { data, loading, error }] = useInsertTransactionMutation({
 *   variables: {
 *      inputAddress: // value for 'inputAddress'
 *      outputAddress: // value for 'outputAddress'
 *      value: // value for 'value'
 *      signature: // value for 'signature'
 *      txHash: // value for 'txHash'
 *   },
 * });
 */
export function useInsertTransactionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertTransactionMutation, InsertTransactionMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertTransactionMutation, InsertTransactionMutationVariables>(InsertTransactionDocument, baseOptions);
      }
export type InsertTransactionMutationHookResult = ReturnType<typeof useInsertTransactionMutation>;
export type InsertTransactionMutationResult = ApolloReactCommon.MutationResult<InsertTransactionMutation>;
export type InsertTransactionMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertTransactionMutation, InsertTransactionMutationVariables>;
export const DeleteGameDataDocument = gql`
    mutation deleteGameData {
  delete_bloxx_transaction(where: {}) {
    affected_rows
  }
  delete_bloxx_address(where: {}) {
    affected_rows
  }
  delete_bloxx_node(where: {}) {
    affected_rows
  }
  delete_bloxx_block(where: {}) {
    affected_rows
  }
  delete_bloxx_block_transaction(where: {}) {
    affected_rows
  }
}
    `;
export type DeleteGameDataMutationFn = ApolloReactCommon.MutationFunction<DeleteGameDataMutation, DeleteGameDataMutationVariables>;

/**
 * __useDeleteGameDataMutation__
 *
 * To run a mutation, you first call `useDeleteGameDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGameDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGameDataMutation, { data, loading, error }] = useDeleteGameDataMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteGameDataMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteGameDataMutation, DeleteGameDataMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteGameDataMutation, DeleteGameDataMutationVariables>(DeleteGameDataDocument, baseOptions);
      }
export type DeleteGameDataMutationHookResult = ReturnType<typeof useDeleteGameDataMutation>;
export type DeleteGameDataMutationResult = ApolloReactCommon.MutationResult<DeleteGameDataMutation>;
export type DeleteGameDataMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteGameDataMutation, DeleteGameDataMutationVariables>;
export const AdminAddressDocument = gql`
    query adminAddress {
  bloxx_address(where: {node: {addresses: {balance: {_is_null: true}}}}, limit: 1) {
    nodePublicKey
  }
}
    `;

/**
 * __useAdminAddressQuery__
 *
 * To run a query within a React component, call `useAdminAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminAddressQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminAddressQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AdminAddressQuery, AdminAddressQueryVariables>) {
        return ApolloReactHooks.useQuery<AdminAddressQuery, AdminAddressQueryVariables>(AdminAddressDocument, baseOptions);
      }
export function useAdminAddressLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AdminAddressQuery, AdminAddressQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AdminAddressQuery, AdminAddressQueryVariables>(AdminAddressDocument, baseOptions);
        }
export type AdminAddressQueryHookResult = ReturnType<typeof useAdminAddressQuery>;
export type AdminAddressLazyQueryHookResult = ReturnType<typeof useAdminAddressLazyQuery>;
export type AdminAddressQueryResult = ApolloReactCommon.QueryResult<AdminAddressQuery, AdminAddressQueryVariables>;
export const BlockDocument = gql`
    query block($blockHash: String) {
  bloxx_block(where: {blockHash: {_eq: $blockHash}}) {
    blockNumber
    previousBlockHash
    merkleRoot
    difficulty
    createdAt
    nonce
    blockHash
    block_transactions {
      transaction {
        inputAddress
        outputAddress
        signature
        value
        txHash
        addressByInputaddress {
          nodePublicKey
        }
      }
    }
  }
}
    `;

/**
 * __useBlockQuery__
 *
 * To run a query within a React component, call `useBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlockQuery({
 *   variables: {
 *      blockHash: // value for 'blockHash'
 *   },
 * });
 */
export function useBlockQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BlockQuery, BlockQueryVariables>) {
        return ApolloReactHooks.useQuery<BlockQuery, BlockQueryVariables>(BlockDocument, baseOptions);
      }
export function useBlockLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BlockQuery, BlockQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BlockQuery, BlockQueryVariables>(BlockDocument, baseOptions);
        }
export type BlockQueryHookResult = ReturnType<typeof useBlockQuery>;
export type BlockLazyQueryHookResult = ReturnType<typeof useBlockLazyQuery>;
export type BlockQueryResult = ApolloReactCommon.QueryResult<BlockQuery, BlockQueryVariables>;
export const BlockHashByBlocknumberDocument = gql`
    query blockHashByBlocknumber($blockNumber: Int) {
  bloxx_block(where: {blockNumber: {_eq: $blockNumber}}) {
    blockHash
  }
}
    `;

/**
 * __useBlockHashByBlocknumberQuery__
 *
 * To run a query within a React component, call `useBlockHashByBlocknumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlockHashByBlocknumberQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlockHashByBlocknumberQuery({
 *   variables: {
 *      blockNumber: // value for 'blockNumber'
 *   },
 * });
 */
export function useBlockHashByBlocknumberQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BlockHashByBlocknumberQuery, BlockHashByBlocknumberQueryVariables>) {
        return ApolloReactHooks.useQuery<BlockHashByBlocknumberQuery, BlockHashByBlocknumberQueryVariables>(BlockHashByBlocknumberDocument, baseOptions);
      }
export function useBlockHashByBlocknumberLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BlockHashByBlocknumberQuery, BlockHashByBlocknumberQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BlockHashByBlocknumberQuery, BlockHashByBlocknumberQueryVariables>(BlockHashByBlocknumberDocument, baseOptions);
        }
export type BlockHashByBlocknumberQueryHookResult = ReturnType<typeof useBlockHashByBlocknumberQuery>;
export type BlockHashByBlocknumberLazyQueryHookResult = ReturnType<typeof useBlockHashByBlocknumberLazyQuery>;
export type BlockHashByBlocknumberQueryResult = ApolloReactCommon.QueryResult<BlockHashByBlocknumberQuery, BlockHashByBlocknumberQueryVariables>;
export const AddressDocument = gql`
    subscription address {
  bloxx_address {
    balance
    id
  }
}
    `;

/**
 * __useAddressSubscription__
 *
 * To run a query within a React component, call `useAddressSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAddressSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddressSubscription({
 *   variables: {
 *   },
 * });
 */
export function useAddressSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<AddressSubscription, AddressSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<AddressSubscription, AddressSubscriptionVariables>(AddressDocument, baseOptions);
      }
export type AddressSubscriptionHookResult = ReturnType<typeof useAddressSubscription>;
export type AddressSubscriptionResult = ApolloReactCommon.SubscriptionResult<AddressSubscription>;
export const OnBlockAddedDocument = gql`
    subscription onBlockAdded {
  bloxx_block {
    blockNumber
    blockHash
    previousBlockHash
    blockStatus
    block_transactions {
      txHash
    }
  }
}
    `;

/**
 * __useOnBlockAddedSubscription__
 *
 * To run a query within a React component, call `useOnBlockAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnBlockAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnBlockAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnBlockAddedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<OnBlockAddedSubscription, OnBlockAddedSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<OnBlockAddedSubscription, OnBlockAddedSubscriptionVariables>(OnBlockAddedDocument, baseOptions);
      }
export type OnBlockAddedSubscriptionHookResult = ReturnType<typeof useOnBlockAddedSubscription>;
export type OnBlockAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<OnBlockAddedSubscription>;
export const OnNewNodeAddedDocument = gql`
    subscription onNewNodeAdded {
  bloxx_node {
    publicKey
    addresses {
      id
      balance
      nodePublicKey
    }
  }
}
    `;

/**
 * __useOnNewNodeAddedSubscription__
 *
 * To run a query within a React component, call `useOnNewNodeAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnNewNodeAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnNewNodeAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnNewNodeAddedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<OnNewNodeAddedSubscription, OnNewNodeAddedSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<OnNewNodeAddedSubscription, OnNewNodeAddedSubscriptionVariables>(OnNewNodeAddedDocument, baseOptions);
      }
export type OnNewNodeAddedSubscriptionHookResult = ReturnType<typeof useOnNewNodeAddedSubscription>;
export type OnNewNodeAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<OnNewNodeAddedSubscription>;
export const OnNewTransactionAddedDocument = gql`
    subscription onNewTransactionAdded {
  bloxx_transaction {
    inputAddress
    outputAddress
    signature
    txHash
    value
    addressByInputaddress {
      nodePublicKey
    }
  }
}
    `;

/**
 * __useOnNewTransactionAddedSubscription__
 *
 * To run a query within a React component, call `useOnNewTransactionAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnNewTransactionAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnNewTransactionAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnNewTransactionAddedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<OnNewTransactionAddedSubscription, OnNewTransactionAddedSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<OnNewTransactionAddedSubscription, OnNewTransactionAddedSubscriptionVariables>(OnNewTransactionAddedDocument, baseOptions);
      }
export type OnNewTransactionAddedSubscriptionHookResult = ReturnType<typeof useOnNewTransactionAddedSubscription>;
export type OnNewTransactionAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<OnNewTransactionAddedSubscription>;